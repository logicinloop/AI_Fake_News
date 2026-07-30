document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const storyInput = document.getElementById("storyInput");
  const urlInput = document.getElementById("urlInput");
  const charCount = document.getElementById("charCount");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const resultsPanel = document.getElementById("results");
  let activeMode = "text";
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      activeMode = tab.dataset.tab;
      if (activeMode === "text") {
        storyInput.style.display = "block";
        urlInput.style.display = "none";
      } else {
        storyInput.style.display = "none";
        urlInput.style.display = "block";
      }
    });
  });
  storyInput.addEventListener("input", () => {
    charCount.textContent = storyInput.value.length;
  });
  analyzeBtn.addEventListener("click", () => {
    const hasInput =
      activeMode === "text" ? storyInput.value.trim().length > 0 : urlInput.value.trim().length > 0;
    if (!hasInput) {
      const target = activeMode === "text" ? storyInput : urlInput;
      target.focus();
      target.style.borderColor = "var(--red)";
      setTimeout(() => (target.style.borderColor = ""), 900);
      return;
    }
    runMockAnalysis();
  });
  function runMockAnalysis() {
    analyzeBtn.disabled = true;
    const label = analyzeBtn.querySelector("span");
    const originalLabel = label.textContent;
    label.textContent = "Analyzing…";
    setTimeout(() => {
      label.textContent = originalLabel;
      analyzeBtn.disabled = false;
      resultsPanel.classList.add("active");
      resultsPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 900);
  }
  function renderResults(data) {
    console.log("renderResults() called with:", data);
  }
});
