const updateHistoryTitle = {
  ko: "업데이트 기록",
  en: "Update History",
  ja: "アップデート履歴",
  es: "Historial de actualizaciones",
  pt: "Histórico de atualizações",
  "zh-hans": "更新记录",
  "zh-hant": "更新紀錄",
};

const newFeaturesTitle = {
  ko: "새로운 기능",
  en: "What's New",
  ja: "新機能",
  es: "Novedades",
  pt: "Novidades",
  "zh-hans": "新功能",
  "zh-hant": "最新功能",
};

const othersTitle = {
  ko: "기타 사항",
  en: "Additional Notes",
  ja: "その他の項目",
  es: "Notas adicionales",
  pt: "Notas adicionais",
  "zh-hans": "其他说明",
  "zh-hant": "其他事項",
};

// const o = "■ ";
const o = "▪ ";
// const o = "• ";

const logs = [
  {
    features: {
      ko: `${o}문장 부호 자동 교정 기능이 추가되었습니다.\n- 곧은 큰따옴표 (") → 둥근 큰따옴표 (“”)\n- 곧은 작은따옴표 (\') → 둥근 작은따옴표 (‘’)\n- 마침표 세 개 (...) → 말줄임표 (…)\n${o}되돌리기(undo)를 하면 교정 전 상태로 돌아갑니다.\n${o}자동 교정 기능을 비활성화하는 옵션은 추후 제공될 예정입니다.`,
      en: `${o}Automatic punctuation correction feature has been added.\n- Straight double quotes (") → Curly double quotes (“”)\n- Straight single quotes (') → Curly single quotes (‘’)\n- Three periods (...) → Ellipsis (…)\n${o}Using the undo function will revert the text to its pre-corrected state.\n${o}An option to disable the automatic correction feature will be provided in the future.`,
      ja: `${o}句読点の自動修正機能が追加されました。\n- 直線のダブルクォーテーション (") → 曲線のダブルクォーテーション (“”)\n- 直線のシングルクォーテーション (') → 曲線のシングルクォーテーション (‘’)\n- ピリオド3つ (...) → 省略記号 (…)\n${o}元に戻す機能を使用すると、修正前の状態にテキストが戻ります。\n${o}自動修正機能を無効にするオプションは、将来提供される予定です。`,
      es: `${o}Se ha añadido la función de corrección automática de puntuación.\n- Comillas rectas (") → Comillas curvas (“”)\n- Comillas simples rectas (') → Comillas simples curvas (‘’)\n- Tres puntos (...) → Puntos suspensivos (…)\n${o}Al usar la función de deshacer, el texto volverá a su estado previo a la corrección.\n${o}En el futuro, se proporcionará una opción para desactivar la función de corrección automática.`,
      pt: `${o}Foi adicionado o recurso de correção automática de pontuação.\n- Aspas retas (") → Aspas curvas (“”)\n- Aspas simples retas (') → Aspas simples curvas (‘’)\n- Três pontos (...) → Reticências (…)\n${o}Ao usar a função desfazer, o texto voltará ao seu estado anterior à correção.\n${o}No futuro, será fornecida uma opção para desativar o recurso de correção automática.`,
      "zh-hans": `${o}新增了自动校正标点符号的功能。\n- 直双引号 (") → 弯双引号 (“”)\n- 直单引号 (') → 弯单引号 (‘’)\n- 三个句号 (...) → 省略号 (…)\n${o}使用撤销功能可以将文本恢复到校正前的状态。\n${o}未来将提供一个选项来禁用自动校正功能。`,
      "zh-hant": `${o}新增了自動校正標點符號的功能。\n- 直雙引號 (") → 彎雙引號 (“”)\n- 直單引號 (') → 彎單引號 (‘’)\n- 三個句號 (...) → 省略號 (…)\n${o}使用撤銷功能可以將文字恢復到校正前的狀態。\n${o}未來將提供一個選項來停用自動校正功能。`,
    },
    others: {
      ko: `${o}macOS에서 자동 업데이트 시 암호 입력 건너뛰는 방법 공지\n${o}동기화 설정 시 rename 오류 수정\n${o}프로그램 다중 실행 방지\n${o}중국어(번체) 시간 관련 글자 오류 수정\n${o}Windows에서 iCloud 설정 관련 안내문 추가`,
      en: `${o}Announcement on skipping password entry for automatic updates on macOS.\n${o}Fixed a rename error during sync settings.\n${o}Prevention of multiple instances of the program running.\n${o}Correction of time-related character errors in Traditional Chinese.\n${o}Addition of guidance for iCloud settings on Windows.`,
      ja: `${o}macOSでの自動更新の際、パスワード入力をスキップする方法のお知らせ。\n${o}同期設定時のリネームエラーを修正。\n${o}プログラムの多重実行を防止。\n${o}繁体字中国語の時間に関連する文字のエラーを修正。\n${o}WindowsでのiCloud設定に関する案内を追加。`,
      es: `${o}Anuncio sobre cómo omitir la entrada de contraseña para actualizaciones automáticas en macOS.\n${o}Corrección de un error de renombrar durante la configuración de sincronización.\n${o}Prevención de múltiples instancias del programa en ejecución.\n${o}Corrección de errores de caracteres relacionados con el tiempo en chino tradicional.\n${o}Adición de orientación para la configuración de iCloud en Windows.`,
      pt: `${o}Anúncio sobre pular a entrada de senha para atualizações automáticas no macOS.\n${o}Correção de um erro de renomear durante as configurações de sincronização.\n${o}Prevenção de múltiplas instâncias do programa em execução.\n${o}Correção de erros de caracteres relacionados ao tempo em Chinês Tradicional.\n${o}Adição de orientações para configurações do iCloud no Windows.`,
      "zh-hans": `${o}在macOS上自动更新时跳过密码输入的通知。\n${o}修复同步设置时的重命名错误。\n${o}防止程序多重运行。\n${o}修正繁体中文时间相关字符错误。\n${o}在Windows上添加iCloud设置相关的指南。`,
      "zh-hant": `${o}在macOS上自動更新時跳過密碼輸入的公告。\n${o}修正同步設定時的重新命名錯誤。\n${o}防止程式多重執行。\n${o}修正繁體中文時間相關字符錯誤。\n${o}在Windows上新增iCloud設定相關的指導。`,
    },
    version: "0.3.0",
    releasedAt: "2024-03-16",
  },
  {
    others: {
      ko: `${o}macOS에서 자동 업데이트 시 암호 입력 요구하지 않도록 개선\n${o}새 글 쓰기에서 자동 저장 오류 수정`,
      en: `${o}Improved to not require password entry for automatic updates on macOS.\n${o}Fixed an auto-save error when creating a new article.`,
      ja: `${o}macOSでの自動更新時にパスワード入力を要求しないように改善。\n${o}新しい記事を作成する際の自動保存エラーを修正。`,
      es: `${o}Mejora para no requerir la entrada de contraseña para actualizaciones automáticas en macOS.\n${o}Corrección de un error de auto-guardado al crear un nuevo artículo.`,
      pt: `${o}Melhoria para não requerer a entrada de senha para atualizações automáticas no macOS.\n${o}Correção de um erro de auto-salvamento ao criar um novo artigo.`,
      "zh-hans": `${o}改进macOS上自动更新时不需要输入密码。\n${o}创建新文章时修复自动保存错误。`,
      "zh-hant": `${o}改善macOS上自動更新時不需輸入密碼。\n${o}創建新文章時修正自動儲存錯誤。`,
    },
    version: "0.2.2",
    releasedAt: "2024-03-10",
  },
];
