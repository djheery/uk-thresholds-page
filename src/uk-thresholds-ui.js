const UKThresholdsUI = (() => {
  const selectors = {
    pageContainer: document.querySelector('.bacc__page-container'),
    selectContainers: Array.from(document.querySelectorAll('#bacc__select-container')),
    engTaxTable: document.querySelector('.eng-tax-thresholds'),
    scotTaxTable: document.querySelector('.scot-tax-thresholds'),
    linkWidget: document.querySelector('.bacc__link-widget'),
    divThresholdTable: document.querySelector('.dividend-threshold-table')
  }

  return {
    getSelectors: () => {return selectors},
    changeTable: (e) => {
      if(!e.target.classList.contains('select-box')) return;
      if(e.target.classList.contains('eng-income-tax')) UKThresholdsUI.englandIncomeTaxThresholds(e.target.options[e.target.selectedIndex].value);
      if(e.target.classList.contains('scot-income-tax')) UKThresholdsUI.scotlandTaxThresholds(e.target.options[e.target.selectedIndex].value);
      if(e.target.classList.contains('dividends-thresholds')) UKThresholdsUI.dividendsThresholds(e.target.options[e.target.selectedIndex].value);
      if(e.target.classList.contains('sdlt-rates')) UKThresholdsUI.stampDutyThresholds(e.target.options[e.target.selectedIndex].value)
    },
    englandIncomeTaxThresholds: (option) => {
      let thresh = UKThresholdsDataCtrl.getThresholds(option)
        selectors.engTaxTable.innerHTML = `
        <table>
        <thead>
          <tr class="heading-container">
            <th class="table-heading">Band</th>
            <th class="table-heading">Taxable Income (MAGI)</th>
            <th class="table-heading">Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-data-row">
            <td><strong>Personal Allowance</strong></td>
            <td>under £${UKThresholdsUI.numberWithCommas(thresh.personalAllowance.t)}</td>
            <td>${thresh.personalAllowance.p}%</td>
          </tr>
          <tr class="table-data-row">
            <td><strong>Basic Rate</strong></td>
            <td>from £${UKThresholdsUI.numberWithCommas(thresh.engWalNi.basicRate.t[0])} to £${UKThresholdsUI.numberWithCommas(thresh.engWalNi.basicRate.t[1])}</td>
            <td>${thresh.engWalNi.basicRate.p}%</td>
          </tr>
          <tr class="table-data-row">
            <td><strong>Higher Rate</strong></td>
            <td>from £${UKThresholdsUI.numberWithCommas(thresh.engWalNi.highRate.t[0])} to £${UKThresholdsUI.numberWithCommas(thresh.engWalNi.highRate.t[1])}</td>
            <td>${UKThresholdsUI.numberWithCommas(thresh.engWalNi.highRate.p)}%</td>
          </tr>
          <tr class="table-data-row">
            <td><strong>Additional Rate</strong></td>
            <td>over £${UKThresholdsUI.numberWithCommas(thresh.engWalNi.highRate.t[1])}</td>
            <td>${UKThresholdsUI.numberWithCommas(thresh.engWalNi.additional.p)}%</td>
          </tr>
        </tbody>
      </table>
        `
    },
    scotlandTaxThresholds: (option) => {
      let thresh = UKThresholdsDataCtrl.getThresholds(option)
      if(option === '16-17' || option === '17-18' || option === '18-19') {
        selectors.scotTaxTable.innerHTML = `
      <table>
      <thead>
        <tr class="heading-container">
          <th class="table-heading">Band</th>
          <th class="table-heading">Income Threshold</th>
          <th class="table-heading">Tax Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-data-row">
          <td><strong>Personal Allowance</strong></td>
          <td>under £${UKThresholdsUI.numberWithCommas(thresh.personalAllowance.t)}</td>
          <td>${thresh.personalAllowance.p}%</td>
        </tr>
        <tr class="table-data-row">
          <td><strong>Starter Rate</strong></td>
          <td>from £${UKThresholdsUI.numberWithCommas(thresh.scot.starterRate.t[0])} to £${UKThresholdsUI.numberWithCommas(thresh.scot.starterRate.t[1])}</td>
          <td>${thresh.scot.starterRate.p}%</td>
        </tr>
        <tr class="table-data-row">
          <td><strong>Higher Rate</strong></td>
          <td>from £${UKThresholdsUI.numberWithCommas(thresh.scot.highRate.t[0])} to £${UKThresholdsUI.numberWithCommas(thresh.scot.highRate.t[1])}</td>
          <td>${UKThresholdsUI.numberWithCommas(thresh.scot.highRate.p)}%</td>
        </tr>
        <tr class="table-data-row">
          <td><strong>Additional Rate</strong></td>
          <td>over £${UKThresholdsUI.numberWithCommas(thresh.scot.highRate.t[1])}</td>
          <td>${UKThresholdsUI.numberWithCommas(thresh.scot.additionalRate.p)}%</td>
        </tr>
      </tbody>
    </table>
      `
      } else {
        selectors.scotTaxTable.innerHTML = `
      <table>
      <thead>
        <tr class="heading-container">
          <th class="table-heading">Band</th>
          <th class="table-heading">Income Threshold</th>
          <th class="table-heading">Tax Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-data-row">
          <td><strong>Personal Allowance</strong></td>
          <td>under £${UKThresholdsUI.numberWithCommas(thresh.personalAllowance.t)}</td>
          <td>${thresh.personalAllowance.p}%</td>
        </tr>
        <tr class="table-data-row">
          <td><strong>Starter Rate</strong></td>
          <td>from £${UKThresholdsUI.numberWithCommas(thresh.scot.starterRate.t[0])} to £${UKThresholdsUI.numberWithCommas(thresh.scot.starterRate.t[1])}</td>
          <td>${thresh.scot.starterRate.p}%</td>
        </tr>
        <tr class="table-data-row">
          <td><strong>Basic Rate</strong></td>
          <td>from £${UKThresholdsUI.numberWithCommas(thresh.scot.basicRate.t[0])} to £${UKThresholdsUI.numberWithCommas(thresh.scot.basicRate.t[1])}</td>
          <td>${UKThresholdsUI.numberWithCommas(thresh.scot.basicRate.p)}%</td>
        </tr>
        <tr class="table-data-row">
          <td><strong>Intermediate Rate</strong></td>
          <td>from £${UKThresholdsUI.numberWithCommas(thresh.scot.intRate.t[0])} to £${UKThresholdsUI.numberWithCommas(thresh.scot.intRate.t[1])}</td>
          <td>${UKThresholdsUI.numberWithCommas(thresh.scot.intRate.p)}%</td>
        </tr>
        <tr class="table-data-row">
          <td><strong>Higher Rate</strong></td>
          <td>from £${UKThresholdsUI.numberWithCommas(thresh.scot.highRate.t[0])} to £${UKThresholdsUI.numberWithCommas(thresh.scot.highRate.t[1])}</td>
          <td>${UKThresholdsUI.numberWithCommas(thresh.scot.highRate.p)}%</td>
        </tr>
        <tr class="table-data-row">
          <td><strong>Additional Rate</strong></td>
          <td>over £${UKThresholdsUI.numberWithCommas(thresh.scot.highRate.t[1])}</td>
          <td>${UKThresholdsUI.numberWithCommas(thresh.scot.additionalRate.p)}%</td>
        </tr>
      </tbody>
    </table>
      `
      }
      
    },
    dividendsThresholds: (option) => {
      let thresh = UKThresholdsDataCtrl.getThresholds(option)
      selectors.divThresholdTable.innerHTML = `
      <table>
        <thead>
          <tr class="heading-container">
            <th class="table-heading">Tax Year</th>
            <th class="table-heading">Dividend Allowance</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-data-row">
            <td>6th April ${thresh.year[0]} to 5th April ${thresh.year[1]}</td>
            <td>£${UKThresholdsUI.numberWithCommas(thresh.dividends)}</td>
          </tr>
        </tbody>
      </table>
      `
    },
    stampDutyThresholds: (option) => {
      let thresh = UKThresholdsDataCtrl.getThresholds(option)
    },
    numberWithCommas: (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
})()