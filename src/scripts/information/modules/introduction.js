const renderIntroduction = () => {
  const html = `
    <div class="main-area">

      <div class="section intro">
        <div class="section-header">
          <div class="section-header-text">Welcome to simplified, trustless, peer-to-peer trading!</div>
        </div>
        <p>
          Block DX is the fastest, most secure, most reliable, and most decentralized DEX. There are some differences when using a decentralized exchange verses a centralized exchange. Aside from there being no accounts, KYC, withdrawal limits, or withdrawal fees, below is a list of things you should know.
        </p>
      </div>
      <div class="section">
        <div class="section-header">
          <div class="section-header-text">Connected Wallets</div><div class="section-header-line"></div>
        </div>
        <p>
          Since trading is peer-to-peer, you must have the wallet of each asset being traded installed, synced, and configured. Configuration was done when starting Block DX the first time, but you can add or update wallets for trading by selecting the Add & Update Wallets link from the sidebar menu.
        </p>
      </div>
      <div class="section">
        <div class="section-header">
          <div class="section-header-text">Balances</div><div class="section-header-line"></div>
        </div>
        <p>
          In the top left panel there is a list of your connected wallets and the available balances for trading. If a value doesn't match the balance shown in the respective wallet, it may be due to funds in your wallet being immature funds (due to staking), funds being in a non-legacy address (<em>see below</em>), or the wallet losing connection. If a wallet you configure is not showing in Balances, it may be because the wallet is locked. If the wallet is unlocked, then try reconfiguring using the Basic Setup menu link.
        </p>
      </div>
      <div class="section">
        <div class="section-header">
          <div class="section-header-text">Address Types (Legacy, Segwit, p2sh, bech32)</div><div class="section-header-line"></div>
        </div>
        <p>
          At the moment only <em>"legacy"</em> addresses are compatible with Block DX.  Here are examples of various Bitcoin addresses:
        </p>
        <p class="code">
          Legacy: 1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2<br>
          Segwit/p2sh:  3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy<br>
          Bech32: bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq<br>
        </p>
        <p>
          The configuration wizard will automatically set your trading wallets to generate Legacy addresses when generating a new address. If funds intended for trading are <strong>not</strong> in a Legacy address, you will need to generate one and send your funds to it in order for your funds to be shown in the Balances section. This is needed for the following wallets:
        </p>
        <p class="code">
          Bitcoin | FujiCoin | Litecoin | MachineCoin | MonaCoin | Myriad | NIX | UniformFiscalObject | Vertcoin
        </p>
      </div>
      <div class="section">
        <div class="section-header">
          <div class="section-header-text">Inputs</div><div class="section-header-line"></div>
        </div>
        <p>
          If you are taking an order where you are selling BLOCK, you need at least 1 or more inputs (UTXOs) to cover the amount of BLOCK being sold and 1 or more inputs (UTXOs) to cover the BLOCK trade fee. If placing multiple orders, you will need a separate set of inputs (UTXOs) that are not used in the previous orders placed. Splitting of assets (creating inputs) can be done using the Coin Control functionality within the respective wallet.
        </p>
      </div>
      <div class="section">
        <div class="section-header">
          <div class="section-header-text">Order Types</div><div class="section-header-line"></div>
        </div>
        <p>
          At the moment Block DX does not support partial order fills. It uses what is called <em>"Exact"</em> orders, meaning that an order must be taken for the full amount. If you are a taker, multiple orders cannot be combined and taken as a single order with this order type. Market and Limit orders will be supported in a future release.
        </p>
      </div>
      <div class="section">
        <div class="section-header">
          <div class="section-header-text">Unlocked Wallet & Closing Wallet</div><div class="section-header-line"></div>
        </div>
        <p>
          Since trading utilizes the Blocknet wallet and the wallet of the assets being traded, these wallets must remain open and unlocked when trading. If the Blocknet wallet is closed, all orders will be canceled. If the Blocknet wallet is locked, all orders will fail. If the wallet of an asset being traded is closed or locked, all orders for that asset will fail. It is important to keep all wallets online until trades are fully completed.
        </p>
      </div>
      <div class="section">
        <div class="section-header">
          <div class="section-header-text">Order Status</div><div class="section-header-line"></div>
        </div>
        <p>
          You can view the status of an order by hovering over the order in the ‘Active Orders’ or ‘Inactive Orders’ tabs.
        </p>
      </div>


    </div>
  `;

// mention
//   dx cant be shut down
//   any project can be listed
//   other sidebar links/info
//   documentation site
// terms of service
//   link to original so duplicate isnt needed
// compatibility list

  return html;
};

module.exports = renderIntroduction;