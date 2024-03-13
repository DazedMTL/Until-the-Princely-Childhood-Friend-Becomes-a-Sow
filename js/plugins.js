// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins = [
  {
    name: "PluginCommonBase",
    status: true,
    description: "パラメータ解析を提供する共通基盤です",
    parameters: {},
  },
  {
    name: "CBR_EroStatus",
    status: true,
    description: "エロステータスを追加します",
    parameters: { SE: "Cursor3", SEvol: "100", window: "true", font: "" },
  },
  {
    name: "FastForwardCustomize",
    status: true,
    description: "イベント高速化調整プラグイン",
    parameters: { eventSpeedVariableId: "0" },
  },
  {
    name: "MakeScreenCapture",
    status: true,
    description: "画面キャプチャ管理プラグイン",
    parameters: {
      PNGキャプチャキー: "F6",
      JPEGキャプチャキー: "F7",
      WEBPキャプチャキー: "F9",
      Ctrl同時押し: "false",
      Alt同時押し: "false",
      ファイル名: "image",
      出力場所: "captures",
      保存形式: "png",
      連番桁数: "2",
      タイムスタンプ: "true",
      署名: "",
      署名サイズ: "22",
      署名画像: "",
      実行間隔: "0",
      効果音: "",
      JPEG品質: "9",
    },
  },
  {
    name: "MAT_LoadComSim",
    status: true,
    description: "ver1.00 メニューコマンドに「ロード」を追加します。",
    parameters: { loadtext: "ロード", testenable: "false" },
  },
  {
    name: "MessageSkip",
    status: true,
    description: "メッセージスキッププラグイン",
    parameters: {
      スキップキー: "control",
      オートキー: "A",
      スキップスイッチ: "0",
      オートスイッチ: "0",
      スキップアイコン: "140",
      オートアイコン: "75",
      アイコンX: "0",
      アイコンY: "0",
      押し続けスキップ: "true",
      オート待機フレーム: "100 + textSize * 10",
      終了解除スイッチID: "0",
      スキップピクチャ: "",
      スキップピクチャX: "500",
      スキップピクチャY: "0",
      オートピクチャ: "",
      オートピクチャX: "750",
      オートピクチャY: "0",
      スイッチピクチャ: "",
      スイッチピクチャトリガー: "0",
      スイッチピクチャX: "750",
      スイッチピクチャY: "0",
      ボタン原点: "0",
      ボタン表示スイッチID: "0",
      ピクチャ座標タイプ: "relative",
      無効化スイッチ: "0",
    },
  },
  {
    name: "MessageWindowHidden",
    status: true,
    description: "メッセージウィンドウ一時消去プラグイン",
    parameters: {
      triggerButton: '["tab","右クリック"]',
      triggerSwitch: "0",
      linkPictureNumbers: "[]",
      linkShowPictureNumbers: "[]",
      disableLinkSwitchId: "0",
      disableSwitchId: "0",
      disableInBattle: "false",
      disableInChoice: "true",
      restoreByDecision: "false",
    },
  },
  {
    name: "ParallelBgs",
    status: true,
    description: "BGS並行演奏プラグイン",
    parameters: {},
  },
  {
    name: "TorigoyaMZ_CommonMenu",
    status: true,
    description: "メニューからコモンイベント呼び出しプラグイン (v.1.0.0)",
    parameters: {
      base: "",
      baseItems:
        '["{\\"name\\":\\"スマホ\\",\\"commonEvent\\":\\"1\\",\\"switchId\\":\\"0\\",\\"visibility\\":\\"true\\",\\"note\\":\\"\\"}"]',
    },
  },
];