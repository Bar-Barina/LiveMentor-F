const LiveMentorSvgs = {
  leftArrowIcon: `<svg role="img" height="10" width="10" aria-hidden="true" class="Svg-sc-ytk21e-0 leya-dW IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16" data-encore-id="icon"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg>`,
  rightArrowIcon: `<svg role="img" height="10" width="10" aria-hidden="true" class="Svg-sc-ytk21e-0 leya-dW IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16" data-encore-id="icon"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path></svg>`,
  upArrowIcon: `<svg role="img" height="16" width="16" aria-hidden="true" class="Svg-sc-ytk21e-0 haNxPq SbDHY3fVADNJ4l9qOLQ2" viewBox="0 0 16 16" data-encore-id="icon"><path d="M14 10 8 4l-6 6h12z"></path></svg>`,
  editIcon: `<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M17.318 1.975a3.329 3.329 0 1 1 4.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 0 1-1.28-1.28l1.581-4.376a4.726 4.726 0 0 1 1.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 0 0-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 0 0 1.001-.636L20.611 5.268a1.329 1.329 0 0 0 0-1.879z"></path></svg>`,
};

export function getLiveMentorSvg(iconName) {
  return LiveMentorSvgs[iconName];
}
