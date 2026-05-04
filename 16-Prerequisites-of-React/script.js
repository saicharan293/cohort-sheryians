function runCode() {
  const code = document.getElementById("code").value;
  const iframe = document.getElementById("preview");

  iframe.srcdoc = "<body></body>";

  const script = iframe.contentWindow.document.createElement("script");
  script.innerHTML = code;

  iframe.contentWindow.document.body.appendChild(script);
}