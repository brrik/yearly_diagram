function add_control(){
    for(let i=1; i<=12; i++){
        const mm = String(i).padStart(2, '0');
        const id = `mm${mm}`;
        let txtarea = document.querySelector("#"+id)
        txtarea.addEventListener("input", (e)=>{
            reflect_topic(id)
            console.log(id)
        })
    }
}

function reflect_topic(mmid){
    let txtarea = document.querySelector("#"+mmid)
    let output = document.querySelector("#output_" + mmid)
    output.innerHTML = txtarea.value;
}

// 先に読み込み（CDN）をHTML側に追加しておくこと
// <script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>

/**
 * 指定要素をPNG画像として保存する
 * @param {string} selector - 例: "#output_table" or ".max_width"
 * @param {string} filename - 例: "timeline.png"
 */
async function saveElementAsPng(selector = "#output_table", filename = "timeline.png") {
  const el = document.querySelector(selector);
  if (!el) {
    console.error(`要素が見つかりません: ${selector}`);
    return;
  }

  const canvas = await html2canvas(el, {
    scale: 2,                 // 画質（2が無難）
    backgroundColor: "#ffffff" // 背景透過が嫌なら白
  });

  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}

// ボタンに紐付け（IDはあなたのHTMLに合わせて変更OK）
document.getElementById("btnSavePng")?.addEventListener("click", () => {
  // 保存対象が .max_width の方なら selector を ".max_width" に変える
  saveElementAsPng("#output_table", "my_timeline.png");
});




add_control()


