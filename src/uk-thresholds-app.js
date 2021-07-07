const UKThresholdsApp = (() => {
  const ui = UKThresholdsUI.getSelectors()
  const loadEventListeners = () => {
    ui.selectContainers.forEach(c => c.addEventListener('change', UKThresholdsUI.changeTable) );
  }
  let contPosition = ui.pageContainer.getBoundingClientRect()
  window.addEventListener('scroll', e => {
    if(window.pageYOffset >= contPosition.y){
      ui.linkWidget.style.position = 'fixed'
    } else {
      ui.linkWidget.style.position = 'absolute'
    }
  })
  return {
    init: () => {
      loadEventListeners()
      UKThresholdsUI.RothThresholds('21-22')
      UKThresholdsUI.TraditionalThresholds('21-22')
    }
  }
})(UKThresholdsUI)

ThresholdsApp.init()