//=============================================================================
// NekoGakuen_FontManager.js
// Version: 2.7.3
//=============================================================================
/*:
 * @target MV MZ
 * @plugindesc Custom Game Font (Ver 2.7.3)
 * @author NekoGakuen
 * @url https://twitter.com/NekoGakuen
 * @help
 * ================================
 * Author: NekoGakuen
 * Version: 2.7.3
 * Twitter: https://twitter.com/NekoGakuen
 * ================================
 * 
 * -- Plugin Information --
 * Let RPG Maker MV/MZ to can use the features of custom font.
 * 
 * 
 * -- Update Information --
 * V2.7.3 Update plugin terms of use, and add information about "Supported Platforms".
 * V2.7.2 Update some code fixes and add support for English language version (DeepL Translator).
 * V2.7.1 Update plugin terms of use. 
 * V2.7.0 Added MZ version support and font size parameter, and fixed some bugs in font file read.
 * V2.6.1 Update plugin terms of use.
 * V2.6.0 Fixed the problem that the default font cannot be read successfully.
 * V2.5.0 Added font file format options parameter and modified some code.
 * V2.2.0 Update Plugin Information and some code.
 * V2.1.0 Fixed the title text display problem in the title screen.
 * V2.0.0 Simplify plugin parameters and remove the part of 10 languages.
 * V1.0.0 Release plugin.
 * 
 * 
 * -- Use Description --
 * 1.Place the font file you want to use in your game in the "fonts" folder of your game project.
 * 2.Load the plugin in the "Plugin Manager" of RPG Maker MV/MZ,
 *   and set it in the "Parameters" section of this plugin.
 * 
 * 
 * --Supported Platforms --
 * - NWjs:
 *   [√ Yes(Windows、macOS)]
 * - Electron:
 *   [√ Yes(Windows、macOS)]
 * - Google Chrome:
 *   [√ Yes(Windows、macOS、Android)]
 * - Mozilla Firefox:
 *   [√ Yes(Windows、macOS、Android)]
 * - Microsoft Edge:
 *   [√ Yes(Windows、macOS、Android)]
 * - Apple Safari:
 *   [√ Yes(macOS)]
 * - Android:
 *   [√ Yes]
 * - iOS:
 *   [? Unknown]
 * 
 * 
 * 
 * -- Terms of Use --
 * No prior notice is required to modify or translate this plugin, and if the plugin has bugs you can report them.
 * The copyright of this plug-in is owned by NekoGakuen.
 * We also reserve the right to modify and change the rules of use of the plugin.
 * 
 * --------------------
 * - Credit: 
 *   [△ Not required, but appreciated if you have one. (#1)]
 * - Commercial: 
 *   [√ OK]
 * - Adults:
 *   [√ OK]
 * 
 * #1：If you want to attach it, you can mark it with "NekoGakuen".
 * --------------------
 * 
 * @param Font Group
 * @text Font Parameter
 * 
 * @param Custom Fontlist
 * @text Custom Font List
 * @desc Put the font file in the fonts folder of the game project directory, and enter the file name of the font file (excluding the file extension) in this parameter, and leave it blank if it is not used.
 * If you choose "System Default Fonts", you can directly enter the "font name" (e.g., Segoe UI, etc.).
 * @parent Font Group
 * @type struct<fonts>[]
 * @default []
 * 
 * @param Font Size
 * @text Fonts Size
 * @desc Set font size.
 * @parent Font Group
 * @type number
 * @default 28
 * 
 * @param Fonts Weight
 * @text Fonts Weight
 * @desc Set the font weight, and the value can range from 100 to 900.
 * @parent Font Group
 * @type combo
 * @default normal
 * @option normal
 * @option bold
 * @option bolder
 * @option lighter
 * 
 */
/*~struct~fonts:
 * 
 * @param Fonts File
 * @text Fonts File Name
 * @desc Set the font file name(excluding the file extension), if you select "System Default Fonts", the font file already installed on the PC will be read.
 * @type string
 * @default mplus-1m-regular
 * 
 * @param Fonts Format
 * @text Fonts File Format
 * @desc Set the font file extension format, if you select "System Default Fonts", the font file already installed on the PC will be read.
 * @type select
 * @default ttf
 * @option System Default Fonts
 * @value local
 * @option OTF (OpenType Font)
 * @value otf
 * @option TTF (TrueType Font)
 * @value ttf
 * @option WOFF (Web Open Font Format)
 * @value woff
 * 
 */
/*:zh
 * @target MV MZ
 * @plugindesc 指定自訂字型 (Ver 2.7.3)
 * @author 貓咪學園 NekoGakuen
 * @url https://twitter.com/NekoGakuen
 * @help
 * ================================
 * 作者：貓咪學園 NekoGakuen
 * 版本：2.7.3
 * 聯絡推特：https://twitter.com/NekoGakuen
 * ================================
 * 
 * ─ 插件簡介 ─
 * 在RPG Maker MV/MZ中用來設定指定的字型顯示。
 * 
 * 
 * ─ 更新履歷 ─
 * V2.7.3 更新插件使用條款，以及新增關於「支援平台」資訊。 
 * V2.7.2 更新一些程式碼上的修正，並新增英文翻譯版本的支援 (DeepL翻譯)。
 * V2.7.1 更新插件使用條款。 
 * V2.7.0 新增MZ版本的支援和字體粗細參數，以及修正字型讀取時的一些BUG。
 * V2.6.1 更新插件使用條款。
 * V2.6.0 修正無法成功讀取電腦內建字型的問題。
 * V2.5.0 新增字型副檔名格式選項參數及修改部分程式碼。
 * V2.2.0 更新插件說明及部分程式碼。
 * V2.1.0 修正標題畫面的標題文字顯示問題。
 * V2.0.0 全面簡化插件參數並移除十國語言的部分。
 * V1.0.0 初次版本的插件發佈。
 * 
 * 
 * ─ 使用說明 ─
 * 1.將你想要在遊戲中使用的字型檔案放在你的遊戲專案的「fonts」資料夾裡。
 * 2.在RPG Maker MV/MZ的「插件管理器」之中載入本插件，
 *   並在本插件的「參數」區塊設定即可。
 * 
 * 
 * ─ 支援平台 ─
 * - NWjs：
 *  【√ 支援(Windows、macOS)】
 * - Electron：
 *  【√ 支援(Windows、macOS)】
 * - Google Chrome：
 *  【√ 支援(Windows、macOS、Android)】
 * - Mozilla Firefox：
 *  【√ 支援(Windows、macOS、Android)】
 * - Microsoft Edge：
 *  【√ 支援(Windows、macOS、Android)】
 * - Apple Safari：
 *  【√ 支援(macOS)】
 * - Android：
 *  【√ 支援】
 * - iOS：
 *  【? 未知】
 * 
 * 
 * 
 * ─ 著作聲明 ─
 * 修改或翻譯本插件無需事前告知，如果插件有BUG可以回報。
 * 本插件著作權為貓咪學園(NekoGakuen)所有。
 * 並且保留對插件使用規則的修改與更動之權利。
 * 
 * --------------------
 * -來源標示：【△ 不需要，但有的話會很感謝。 (註1)】
 * -商業營利：【√ 允許】
 * -成人用途：【√ 允許】
 * 
 * ※註1：但如有註明的話，可以註明「NekoGakuen」即可。
 * --------------------
 * 
 * @param Font Group
 * @text 字型參數設定
 * 
 * @param Custom Fontlist
 * @text 自訂字型清單
 * @desc 將字型檔案放在專案目錄fonts資料夾內，在此參數輸入該字型檔的檔名(不包括副檔名)，用不到此參數就空白即可。
 * 但如果選擇「系統內建字型」時，直接輸入「字型名稱」(例如：微軟正黑體等)即可。
 * @parent Font Group
 * @type struct<fonts>[]
 * @default []
 * 
 * @param Font Size
 * @text 顯示字型大小
 * @desc 設定目前在電腦上顯示字型大小的設定。
 * @parent Font Group
 * @type number
 * @default 28
 * 
 * @param Fonts Weight
 * @text 指定字型粗細
 * @desc 指定字型顯示時的粗細樣式，可以直接輸入指定的數值範圍100~900之間。
 * @parent Font Group
 * @type combo
 * @default normal
 * @option normal
 * @option bold
 * @option bolder
 * @option lighter
 * 
 */
/*~struct~fonts:zh
 * 
 * @param Fonts File
 * @text 指定字型檔案名稱
 * @desc 指定字型檔案名稱(不含副檔名)，如選擇「系統內建字型」，則抓取電腦系統本身已安裝好的字型。
 * @type string
 * @default mplus-1m-regular
 * 
 * @param Fonts Format
 * @text 指定字型格式
 * @desc 指定字型的副檔名格式，如選擇「系統內建字型」，則抓取電腦系統本身已安裝好的字型。
 * @type select
 * @default ttf
 * @option 系統內建字型
 * @value local
 * @option OTF (OpenType Font)
 * @value otf
 * @option TTF (TrueType Font)
 * @value ttf
 * @option WOFF (Web Open Font Format)
 * @value woff
 * 
 */
//=============================================================================
'use strict';

let NekoGakuen_FontManager = {};
NekoGakuen_FontManager.PluginName = "NekoGakuen_FontManager";
NekoGakuen_FontManager.Parameters = PluginManager.parameters(NekoGakuen_FontManager.PluginName);
NekoGakuen_FontManager = {
    font_size: Number(NekoGakuen_FontManager.Parameters['Font Size'] || 28),
    fonts_weight: String(NekoGakuen_FontManager.Parameters['Fonts Weight'] || 'normal'),
    cfl: JSON.parse(NekoGakuen_FontManager.Parameters['Custom Fontlist']),
    fonts_file: Array(),
    fonts_format: Array(),
    fonts_family: "GameFont"
}

if (Utils.RPGMAKER_NAME === "MZ") {
    (() => {
        const checkFontFile = function (url) {
            if (Utils.isNwjs()) {
                const fs = require('fs');
                if (fs.existsSync(url)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                const xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", url, false);
                xmlhttp.send(null);
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }

        Graphics.loadFontWs = function (name, url, weight) {
            const style = document.createElement('style');
            const head = document.getElementsByTagName('head');
            switch (weight) {
                case 'normal':
                    weight = 'normal';
                    break;
                case 'bold':
                    weight = 'bold';
                    break;
                case 'bolder':
                    weight = 'bolder';
                    break;
                case 'lighter':
                    weight = 'lighter';
                    break;
                default:
                    break;
            }
            const rule = '@font-face { font-family: "' + name + '"; src: url("' + url + '"); font-weight: ' + weight + '; }';
            style.type = 'text/css';
            head.item(0).appendChild(style);
            style.sheet.insertRule(rule, 0);
        };

        Graphics.localFontWs = function (name, weight) {
            const style = document.createElement('style');
            const head = document.getElementsByTagName('head');
            switch (weight) {
                case 'normal':
                    weight = 'normal';
                    break;
                case 'bold':
                    weight = 'bold';
                    break;
                case 'bolder':
                    weight = 'bolder';
                    break;
                case 'lighter':
                    weight = 'lighter';
                    break;
                default:
                    break;
            }
            const rule = '@font-face { font-family: "' + name + '"; src: local("' + name + '"); font-weight: ' + weight + '; }';
            style.type = 'text/css';
            head.item(0).appendChild(style);
            style.sheet.insertRule(rule, 0);
        };

        for (let i = 0; i < NekoGakuen_FontManager.cfl.length; i++) {
            let Read_FontManager = JSON.parse(NekoGakuen_FontManager.cfl[i]);
            NekoGakuen_FontManager.fonts_file.push(Read_FontManager["Fonts File"]);
            NekoGakuen_FontManager.fonts_format.push(Read_FontManager["Fonts Format"]);
        }

        for (let i = 0; i < NekoGakuen_FontManager.cfl.length; ++i) {
            const filename = NekoGakuen_FontManager.fonts_file[i].trim();
            if (NekoGakuen_FontManager.fonts_format[i] != 'local') {
                const url = './fonts/' + filename + '.' + NekoGakuen_FontManager.fonts_format[i];
                if (checkFontFile(url)) {
                    Graphics.loadFontWs(filename, url, NekoGakuen_FontManager.fonts_weight);
                    NekoGakuen_FontManager.fonts_family = filename;
                    i = NekoGakuen_FontManager.cfl.length;
                }
            } else {
                Graphics.localFontWs(filename, NekoGakuen_FontManager.fonts_weight);
                NekoGakuen_FontManager.fonts_family = filename;
                i = NekoGakuen_FontManager.cfl.length;
            }
        }

        Scene_Boot.prototype.loadGameFonts = function () {
            const advanced = $dataSystem.advanced;
            FontManager.load("rmmz-mainfont", advanced.mainFontFilename);
            FontManager.load("rmmz-numberfont", advanced.numberFontFilename);
            for (let i = 0; i < NekoGakuen_FontManager.cfl.length; ++i) {
                let filename = NekoGakuen_FontManager.fonts_file[i].trim();
                if (NekoGakuen_FontManager.fonts_format[i] != 'local') {
                    const url = './fonts/' + filename + '.' + NekoGakuen_FontManager.fonts_format[i];
                    if (checkFontFile(url)) {
                        Graphics.loadFontWs(filename, url, NekoGakuen_FontManager.fonts_weight);
                        NekoGakuen_FontManager.fonts_family = filename;
                        FontManager.load(filename, filename + '.' + NekoGakuen_FontManager.fonts_format[i]);
                        i = NekoGakuen_FontManager.cfl.length;
                    }
                } else {
                    Graphics.localFontWs(filename, NekoGakuen_FontManager.fonts_weight);
                    NekoGakuen_FontManager.fonts_family = filename;
                    i = NekoGakuen_FontManager.cfl.length;
                }
            }
        };

        Bitmap.prototype._makeFontNameText = function () {
            const italic = this.fontItalic ? "Italic " : "";
            const bold = this.fontBold ? "Bold " : "";
            return NekoGakuen_FontManager.fonts_weight + ' ' + italic + bold + this.fontSize + "px " + this.fontFace;
        };

        NekoGakuen_FontManager._Scene_Title_drawGameTitle = Scene_Title.prototype.drawGameTitle;
        Scene_Title.prototype.drawGameTitle = function () {
            if (NekoGakuen_FontManager.cfl.length > 0) {
                this._gameTitleSprite.bitmap.fontFace = NekoGakuen_FontManager.fonts_family;
            } else {
                this._gameTitleSprite.bitmap.fontFace = 'GameFont';
            }
            NekoGakuen_FontManager._Scene_Title_drawGameTitle.call(this);
        };

        Game_System.prototype.mainFontFace = function () {
            if (NekoGakuen_FontManager.cfl.length > 0) {
                return NekoGakuen_FontManager.fonts_family;
            } else {
                return "rmmz-mainfont, " + $dataSystem.advanced.fallbackFonts;
            }
        };

        NekoGakuen_FontManager._Window_Base_standardFontSize = Window_Base.prototype.standardFontSize;
        Window_Base.prototype.standardFontSize = function () {
            NekoGakuen_FontManager._Window_Base_standardFontSize.call(this);
        };

        Game_System.prototype.mainFontSize = function () {
            return NekoGakuen_FontManager.font_size;
        };

    })();
}

if (Utils.RPGMAKER_NAME === "MV") {
    (function () {
        var checkFontFile = function (url) {
            if (Utils.isNwjs()) {
                var fs = require('fs');
                if (fs.existsSync(url)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", url, false);
                xmlhttp.send(null);
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }

        Graphics.loadFontWs = function (name, url, weight) {
            var style = document.createElement('style');
            var head = document.getElementsByTagName('head');
            switch (weight) {
                case 'normal':
                    weight = 'normal';
                    break;
                case 'bold':
                    weight = 'bold';
                    break;
                case 'bolder':
                    weight = 'bolder';
                    break;
                case 'lighter':
                    weight = 'lighter';
                    break;
                default:
                    break;
            }
            var rule = '@font-face { font-family: "' + name + '"; src: url("' + url + '"); font-weight: ' + weight + '; }';
            style.type = 'text/css';
            head.item(0).appendChild(style);
            style.sheet.insertRule(rule, 0);
            this._createFontLoader(name);
        };

        Graphics.localFontWs = function (name, weight) {
            var style = document.createElement('style');
            var head = document.getElementsByTagName('head');
            switch (weight) {
                case 'normal':
                    weight = 'normal';
                    break;
                case 'bold':
                    weight = 'bold';
                    break;
                case 'bolder':
                    weight = 'bolder';
                    break;
                case 'lighter':
                    weight = 'lighter';
                    break;
                default:
                    break;
            }
            var rule = '@font-face { font-family: "' + name + '"; src: local("' + name + '"); font-weight: ' + weight + '; }';
            style.type = 'text/css';
            head.item(0).appendChild(style);
            style.sheet.insertRule(rule, 0);
            this._createFontLoader(name);
        };

        for (var i = 0; i < NekoGakuen_FontManager.cfl.length; i++) {
            var Read_FontManager = JSON.parse(NekoGakuen_FontManager.cfl[i]);
            NekoGakuen_FontManager.fonts_file.push(Read_FontManager["Fonts File"]);
            NekoGakuen_FontManager.fonts_format.push(Read_FontManager["Fonts Format"]);
        }

        for (var i = 0; i < NekoGakuen_FontManager.cfl.length; ++i) {
            var filename = NekoGakuen_FontManager.fonts_file[i].trim();
            if (NekoGakuen_FontManager.fonts_format[i] != 'local') {
                var url = './fonts/' + filename + '.' + NekoGakuen_FontManager.fonts_format[i];
                if (checkFontFile(url)) {
                    Graphics.loadFontWs(filename, url, NekoGakuen_FontManager.fonts_weight);
                    NekoGakuen_FontManager.fonts_family = filename;
                    i = NekoGakuen_FontManager.cfl.length;
                }
            } else {
                Graphics.localFontWs(filename, NekoGakuen_FontManager.fonts_weight);
                NekoGakuen_FontManager.fonts_family = filename;
                i = NekoGakuen_FontManager.cfl.length;
            }
        }

        Bitmap.prototype._makeFontNameText = function () {
            return NekoGakuen_FontManager.fonts_weight + ' ' + (this.fontItalic ? 'Italic ' : '') +
                this.fontSize + 'px ' + this.fontFace;
        };

        NekoGakuen_FontManager._Scene_Title_drawGameTitle = Scene_Title.prototype.drawGameTitle;
        Scene_Title.prototype.drawGameTitle = function () {
            if (NekoGakuen_FontManager.cfl.length > 0) {
                this._gameTitleSprite.bitmap.fontFace = NekoGakuen_FontManager.fonts_family;
            } else {
                this._gameTitleSprite.bitmap.fontFace = 'GameFont';
            }
            NekoGakuen_FontManager._Scene_Title_drawGameTitle.call(this);
        };

        NekoGakuen_FontManager._Window_Base_standardFontFace = Window_Base.prototype.standardFontFace;
        Window_Base.prototype.standardFontFace = function () {
            NekoGakuen_FontManager._Window_Base_standardFontFace.call(this);
            if (NekoGakuen_FontManager.cfl.length > 0) {
                return NekoGakuen_FontManager.fonts_family;
            } else {
                return 'GameFont'
            }
        };

        NekoGakuen_FontManager._Window_Base_standardFontSize = Window_Base.prototype.standardFontSize;
        Window_Base.prototype.standardFontSize = function () {
            NekoGakuen_FontManager._Window_Base_standardFontSize.call(this);
            return NekoGakuen_FontManager.font_size;
        };

        NekoGakuen_FontManager._Window_Base_resetFontSettings = Window_Base.prototype.resetFontSettings;
        Window_Base.prototype.resetFontSettings = function () {
            NekoGakuen_FontManager._Window_Base_resetFontSettings.call(this);
            this.contents.fontFace = this.standardFontFace();
            this.contents.fontSize = this.standardFontSize();
            this.resetTextColor();
        };
    })();
}