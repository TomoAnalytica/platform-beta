

 $(document).ready(function() {
  $("#accordion").find('.collapse').collapse('show');
  $('[data-toggle="tooltip"]').tooltip()

 } );




 function getview(project_name){
            $("#projectChoosen").val(project_name);
            $.ajax({
                url: '/byproject',
                data: {
                  'projectName': project_name
                },
                dataType: 'json',
                success: function (data) {
                landing_sections = data.landing_sections;
                var leftSection = "";
                for(var sectionsCnt=0;sectionsCnt < data.landing_sections.length;sectionsCnt++){
                    var obj = data.landing_sections[sectionsCnt];
                    sectionsHead = obj.label;
                    menu = obj.menus;
                    leftSection = leftSection + "<div class='panel panel-default' style='margin-bottom:0px;border-color: white;'><div class='panel-heading' style='padding-top: 6px;color: white;height: 25px;background-color: #7F7F7F;text-align: center;border-top-left-radius:0;border-top-right-radius:0;' role='tab' id='heading"+sectionsCnt+"'>    <h4 class='panel-title' style='font-size: 12px;'>        <a role='button' data-toggle='collapse' href='#collapse"+sectionsCnt+"' aria-expanded='true'  aria-controls='collapse"+sectionsCnt+"' class='trigger collapsed'><div id='sectionLabel"+sectionsCnt+"'>"+sectionsHead+"</div></a></h4></div><div id='collapse"+sectionsCnt+"' class='panel-collapse collapse' role='tabpanel' aria-labelledby='heading"+sectionsCnt+"'><ul class='list-group' style='padding-left: 10%;'>";
                    //leftSection = leftSection + "<div class='panel panel-default'><div class='panel-heading' role='tab' id='heading"+sectionsCnt+"'><h4 class='panel-title'><a role='button' data-toggle='collapse' data-parent='#accordion' href='#collapse"+sectionsCnt+"' aria-expanded='true' aria-controls='collapse"+sectionsCnt+"'> "+sectionsHead+" </a></h4></div> <div id='collapse"+sectionsCnt+"' class='panel-collapse collapse in'  role='tabpane"+sectionsCnt+"' aria-labelledby='heading"+sectionsCnt+"'>";



                    menuSection="";
                    for(var menuCtr=0;menuCtr<menu.length;menuCtr++){
                        var objM = menu [menuCtr];
                        menuSection=menuSection+"<li class='list-group-item' id='menulist'><div id='menuLabel"+menuCtr+"'   onclick=\"setIframeSrc('"+objM.hyperlink+"')\" style='width:165px;'>"+objM.name+"</div></li>";
                    }
                    leftSection = leftSection + menuSection;
                    leftSection = leftSection + "</ul></div></div>";
                }
                $("#accordion").html(leftSection);
                $("#accordion").find('.collapse').collapse('show');
                }
            });


        }

  function setIframeSrc(iframeSrc){


    var prj = $("#projectChoosen").val();
    var $iframe = $("#"+prj+" .projectFrame");
    if ( $iframe.length ) {
        $iframe.attr('src',iframeSrc);
        return false;
    }

    return true;

  }
