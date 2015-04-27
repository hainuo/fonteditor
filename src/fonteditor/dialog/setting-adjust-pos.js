/**
 * @file 设置自动调整字形位置
 * @author mengke01(kekee000@gmail.com)
 */

define(
    function (require) {

        var tpl = require('../template/dialog/setting-adjust-pos.tpl');


        return require('./setting').derive({

            title: '调整字形位置',

            getTpl: function () {
                return tpl;
            },

            set: function (setting) {
                this.setFields(setting || {});
            },

            validate: function () {
                var setting = this.getFields();

                if (setting.leftSideBearing === undefined
                    && setting.rightSideBearing === undefined
                    && setting.verticalAlign === undefined
                ) {
                    alert('没有设置项目!');
                    return false;
                }

                return setting;
            }

        });
    }
);
