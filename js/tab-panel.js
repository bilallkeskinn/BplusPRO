(function() {
  
    function activateTab() {
        if(activeTab) {
          resetTab.call(activeTab);
        }
        this.parentNode.className = 'tab tab-active';
        activeTab = this;
        activePanel = document.getElementById(activeTab.getAttribute('href').substring(1));
           activePanel.className = 'tabpanel show';
          activePanel.setAttribute('aria-expanded', true);
      }
      
      function resetTab() {
            activeTab.parentNode.className = 'tab';
        if(activePanel) {
            activePanel.className = 'tabpanel hide';
              activePanel.setAttribute('aria-expanded', false);
        }
      }
      
      var doc = document,
          tabs = doc.querySelectorAll('.tab a'),
          panels = doc.querySelectorAll('.tabpanel'),
          activeTab = tabs[0],
          activePanel;
     
         activateTab.call(activeTab);
      
      for(var i = tabs.length - 1; i >= 0; i--) {
        tabs[i].addEventListener('click', activateTab, false);
      }
    
    })();