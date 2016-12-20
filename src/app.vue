<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view navbar-through :dynamic-navbar="true">
        <f7-navbar title="Left Panel"></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-block inner>
              <p>Left panel content goes here</p>
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Right Panel -->
    <f7-panel right cover layout="dark">
      <f7-view navbar-through :dynamic-navbar="true">
        <f7-navbar title="Right Panel" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-block>
              <p>Right panel content goes here</p>
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view navbar-through :dynamic-navbar="true">
        <!-- Navbar -->
        <f7-navbar>
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>Framework7</f7-nav-center>
          <f7-nav-right>
            <f7-link icon="icon-bars" open-panel="right"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <f7-block-title>Welcome to my App</f7-block-title>
            <f7-block inner>
              <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
            </f7-block>
            <f7-block-title>Navigation</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/services/" title="Services"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
            </f7-list>
            <f7-block-title>Side Panels</f7-block-title>
            <f7-block>
              <f7-grid>
                <f7-col width="50">
                  <f7-button open-panel="left">Left Panel</f7-button>
                </f7-col>
                <f7-col width="50">
                  <f7-button open-panel="right">Right Panel</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

  </div>
</template>

<script>
export default {}
</script>