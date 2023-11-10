function displayDataTable(div, url, loader = '<div class="spinner-border text-primary m-2" role="status"></div>') {
    jQuery(div).dataTable().fnDestroy();
    jQuery(div).dataTable({
        bProcessing: true,
        bServerSide: true,
        ordering: false,
        iDisplayLength: 10,
        aLengthMenu: [[10, 25, 50, 100, 200], [10, 25, 50, 100, 200]],
        sAjaxSource: url,
        oLanguage: {
            sProcessing: loader
        },
        aaSorting: [],
        fnCreatedRow: function (nRow, aData, iDataIndex) {
            $(nRow).attr('id', aData['DT_RowId']);
        },
        pagingType: $(window).width() < 768 ? "simple" : "simple_numbers" 
    });
}

function displayDataTableReport(div, url, ajaxdata, paging=true, info=false, loader = '<div class="spinner-border text-primary m-2" role="status"></div>') {
    $(div).dataTable().fnDestroy();
    var oTable = $(div).DataTable({
        paging: paging,
        info: info,
        date_to: true,
        date_from: true,
        responsive: true,
        bProcessing: true,
        bServerSide: true,
        ordering: false,
        bFilter: false,
        iDisplayLength: 10,
        aLengthMenu: [[10, 25, 50, 100, 200], [10, 25, 50, 100, 200]],
        ajax: {
            url: url,
            data: ajaxdata
        },
        oLanguage: {
            sProcessing: loader
        },
        aaSorting: [],
        fnCreatedRow: function (nRow, aData, iDataIndex) {
            $(nRow).attr('id', aData['DT_RowId']);
        },
        /*footerCallback: function (row, data, start, end, display) {
            var api = this.api(), data;
            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ? i.replace(/[^\d\.]/g, '') * 1 : typeof i === 'number' ? i : 0;
            };

            // total_earnning over all pages
            total_earnning = api.column(8).data().reduce(function (a, b) {
                return intVal(a) + intVal(b);
            }, 0);

            // total_page_earnning over this page
            
            // total_page_earnning = parseFloat(total_page_earnning);
            total_earnning = parseFloat(total_earnning);
            // Update footer
            // $('#totalEarnning').html("₹"+total_page_earnning.toFixed(2)+"/₹"+total_earnning.toFixed(2));
            $('#totalEarnning').html("₹" + total_earnning.toFixed(2));
        },*/
        pagingType: $(window).width() < 768 ? "simple" : "simple_numbers" 
    });
}