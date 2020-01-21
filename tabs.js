    jobTabs = function() {
    // vars
    $tab1 = $('.f-tab');
    $tab2 = $('.i-tab');
    $tab1.click(function(e){
      $(this).closest('.jobs__header').next().find('.it-jobs').hide();
      $(this).closest('.jobs__header').next().find('.finance-jobs').show();
      $tab2.removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
    $tab2.click(function(e){
      $(this).closest('.jobs__header').next().find('.it-jobs').show();
      $(this).closest('.jobs__header').next().find('.finance-jobs').hide();
      $tab1.removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
  },


  // html code
<div class="jobs__header">
  <div class="tab f-tab active">FINANCE & ACCOUNTING</div>
  <div class="tab i-tab">INFORMATION TECHNOLOGY</div>
</div>

<div class="jobs__list">
<div class="finance-jobs jobs-content active"></div>
<div class="it-jobs jobs-content"></div>
</div>