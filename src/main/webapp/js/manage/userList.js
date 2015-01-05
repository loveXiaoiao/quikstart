/**
 * 用户列表
 */
var User = function () {
	var inittable = function(){
		var oTable = $('#usertable').dataTable( {
	        "bServerSide": true,
	        "sAjaxSource": "system/listuser",
	        "bProcessing": false,
	        "bFilter": false,//过滤功能
	        "bSort": false,//排序功能
	        "oLanguage": {
				"sUrl": "js/datatable-cn.txt"
			},
	        "aoColumns": [
	                      	{ "mDataProp": function(lineData){
	                      		var id = lineData.id;
//	                      		return '<div class="checker"> <span><input type="checkbox" class="checkboxes" name="user_check" value="'+id+'" /> </span></div>';
	                      		return '<input type="checkbox" class="group-checkable checkboxes"data-set="#usertable .checkboxes" name="user_check" value="'+id+'" />';
	                      	}},
//							{ "mDataProp": "id" },
							{ "mDataProp": "loginName" },
							{ "mDataProp": "name" },
							{ "mDataProp": "roles" },
							{ "mDataProp": "registerDate" },
							{ "mDataProp": function(lineData){
								var id = lineData.id;
								var del = '<button id="sample_editable_1_new" class="btn red" onclick="del(\''+id+'\')">删除<i class="icon-minus"></i></button>';
								return del;
							} }
	                  ]
		} );
		
		jQuery('#usertable .group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                } else {
                    $(this).attr("checked", false);
                }
            });
            jQuery.uniform.update(set);
        });
	};
	
    return {
        init: function () {
        	inittable();
        }
    };

}();


//$(document).ready(function() {
//    var lastIdx = null;
//    var table = $('#usertable').DataTable();
//    $('#usertable tbody')
//        .on( 'mouseover', 'td', function () {
//            var colIdx = table.cell(this).index().column;
//            if ( colIdx !== lastIdx ) {
//                $( table.cells().nodes() ).removeClass( 'highlight' );
//                $( table.column( colIdx ).nodes() ).addClass( 'highlight' );
//            }
//        } )
//        .on( 'mouseleave', function () {
//            $( table.cells().nodes() ).removeClass( 'highlight' );
//        } );
//} );
function tankun(){
	$("#modal_content").html("请选择内容！");
	$("#myModal").modal('show');//展示
//	$("#myModal").modal('hid');关闭
}

function deleteUsers(){
	alert("删除选中用户!");
}

function del(id){
	alert(id);
}

function selectAll(){
	alert("我要选中所有……");
}