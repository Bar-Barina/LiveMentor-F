const LiveMentorSvgs = {
  leftArrowIcon: `<svg role="img" height="10" width="10" aria-hidden="true" class="Svg-sc-ytk21e-0 leya-dW IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16" data-encore-id="icon"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg>`,
  rightArrowIcon: `<svg role="img" height="10" width="10" aria-hidden="true" class="Svg-sc-ytk21e-0 leya-dW IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16" data-encore-id="icon"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path></svg>`,
  upArrowIcon: `<svg role="img" height="16" width="16" aria-hidden="true" class="Svg-sc-ytk21e-0 haNxPq SbDHY3fVADNJ4l9qOLQ2" viewBox="0 0 16 16" data-encore-id="icon"><path d="M14 10 8 4l-6 6h12z"></path></svg>`,
};

export function getLiveMentorSvg(iconName) {
  return LiveMentorSvgs[iconName];
}
