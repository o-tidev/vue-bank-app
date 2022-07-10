import axios from 'axios'
import * as dotenv from "dotenv"
require("dotenv").config();
import { error } from '../../utils/error';

const TOKEN_KEY = 'jwt-token'

export default {
    namespaced: true,
    state() {
        return {
            // connecting the jwt auth token from local storage
            token: localStorage.getItem(TOKEN_KEY)
        }
    },
    mutations: {
        // setting the login token
        setToken(state, token) {
            state.token = token,
                localStorage.setItem(TOKEN_KEY, token)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem(TOKEN_KEY)
        }
    },
    // login
    actions: {
        async login({ commit, dispatch }, payload) {
            try {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`;
                const { data } = await axios.post(url, {...payload, returnSecureToken: true});
                commit('setToken', data.idToken)
            } catch (e) {
                dispatch(
                  "setMessage",
                  {
                    value: error(e.response.data.error.message),
                    type: 'danger',
                  },
                  { root: true }
                );
                console.log();
                throw new Error()
            }
        }
    },
    getters: {
        token(state) {
            return state.token
        },
        isAuthenticated(_, getters) {
            return !!getters.token
        }
    }
}