/**
 * @file bezierQuadraticEquation.js
 * @author mengke01
 * @date 
 * @description
 * 求解二次贝塞尔方程根
 */

define(
    function(require) {

        var quadraticEquation = require('./quadraticEquation');

        /**
         * 求解二次方程
         * 
         * @param {number} a a系数
         * @param {[type]} b b系数
         * @param {[type]} c c系数
         * @return {Array} 系数解
         */
        function bezierQuadraticEquation(a, b, c) {
            var result = quadraticEquation(a, b, c);
            return result 
                ? result.filter(function(item) {
                    return item >= 0 && item <= 1;
                }) 
                : false;
        }

        return bezierQuadraticEquation;
    }
);
