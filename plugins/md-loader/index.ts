
import MarkdownIt from 'markdown-it'
var hljs = require('highlight.js') 
import type { Plugin } from 'vite'
// Actual default values


const fileRegex = /\.(md)$/
export default function myPlugin(): Plugin{
  return {
    name: 'md-loader', // 必须的，将会在 warning 和 error 中显示
    enforce: 'pre',
    transform(src, id) {
      if(fileRegex.test(id)){       
        try {
          const md = new MarkdownIt({
              html: true,
              highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    return '<pre class="hljs"><code>' +
                           hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                           '</code></pre>';
                  } catch (__) {}
                }
            
                return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
              }
            
          })
          return `<template>
          ${md.render(src)}
          </template>`
        }
        catch (e) {
          this.error(e)
        }
      }
    }
  }
}