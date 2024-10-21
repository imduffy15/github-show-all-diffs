function expandAllDiffs() {
  document.querySelectorAll('button.load-diff-button').forEach(button => button.click());
  console.log("All 'Load diff' buttons clicked!");
}

function onPageLoad() {
  console.log("GitHub PR Files page loaded!");
  expandAllDiffs();
}

// Use MutationObserver to detect when the page content has changed
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === 'childList') {
      onPageLoad();
      break;
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });

// Run once on initial page load
onPageLoad();