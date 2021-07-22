const UKThresholdsApp = (() => {
  const ui = UKThresholdsUI.getSelectors()
  const loadEventListeners = () => {
    ui.selectContainers.forEach(c => c.addEventListener('change', UKThresholdsUI.changeTable) );
  }
  let contPosition = ui.pageContainer.getBoundingClientRect()
  window.addEventListener('scroll', e => {
    if(window.pageYOffset >= contPosition.y){
      ui.linkWidget.style.position = 'sticky'
    } else {
      ui.linkWidget.style.position = 'absolute'
    }
  })
  window.addEventListener('DOMContentLoaded', e => {
    const containerHeight = document.querySelector('.bacc__page-container__inner-container').clientHeight
    document.querySelector('.bacc__link-widget-container').style.height = containerHeight + 'px'
  })
  return {
    init: () => {
      loadEventListeners()
      UKThresholdsUI.englandIncomeTaxThresholds('21-22');
      UKThresholdsUI.scotlandTaxThresholds('21-22');
      UKThresholdsUI.dividendsThresholds('21-22')
    }
  }
})(UKThresholdsUI)

UKThresholdsApp.init()