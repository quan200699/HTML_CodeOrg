
$(function () {

    // There's the gallery and the trash
    var $gallery = $("#gallery"),
        $blocks = $("#blocks");

   //khi kéo vào thùng rác thì xóa
    $('#trashcan').droppable({
        drop: function(event, ui) {
            ui.draggable.remove();
            arrRun[ui.draggable[0].attributes[0].textContent] = "t";
        }
    });

    // để các item kéo được
    $(".block").draggable({
        // cancel: "a.ui-icon", // clicking an icon won't initiate dragging
        // revert: "invalid", // when not dropped, the item will revert back to its initial position
        // // containment: "document",
        helper: "clone",
        cursor: "move"
    });

    // kéo thả vào when run
    $("#work-space").droppable({
        accept: ".block",
        classes: {
            "ui-droppable-active": "ui-state-highlight"
        },
        drop: function (event, ui) {
            arrRun.push(ui.draggable[0].attributes[0].textContent);
            $("#begin-block").append("<div name ='"+ count + "'  style='background-color: cadetblue; border: 0.1px solid' class='block1'>" + ui.draggable[0].innerHTML + "</div>");
           count++;
            $(".block1").draggable({
                revert:true,
                cursor: "move",

            });
            console.log(arrRun);
        }
    });


    // Image deletion function
    var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";

    function deleteImage($item) {
        $item.fadeOut(function () {
            var $list = $("ul", $blocks).length ?
                $("ul", $blocks) :
                $("<ul class='gallery ui-helper-reset'/>").appendTo($blocks);

            $item.find("a.ui-icon-trash").remove();
            $item.append(recycle_icon).appendTo($list).fadeIn(function () {
                $item
                    .animate({width: "48px"})
                    .find("img")
                    .animate({height: "36px"});
            });
        });
    }

    // Image recycle function
    var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";

    function recycleImage($item) {
        $item.fadeOut(function () {
            $item
                .find("a.ui-icon-refresh")
                .remove()
                .end()
                .css("width", "96px")
                .append(trash_icon)
                .find("img")
                .css("height", "72px")
                .end()
                .appendTo($gallery)
                .fadeIn();
        });
    }

    // Image preview function, demonstrating the ui.dialog used as a modal window
    function viewLargerImage($link) {
        var src = $link.attr("href"),
            title = $link.siblings("img").attr("alt"),
            $modal = $("img[src$='" + src + "']");

        if ($modal.length) {
            $modal.dialog("open");
        } else {
            var img = $("<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />")
                .attr("src", src).appendTo("body");
            setTimeout(function () {
                img.dialog({
                    title: title,
                    width: 400,
                    modal: true
                });
            }, 1);
        }
    }

    // Resolve the icons behavior with event delegation
    $("ul.gallery > li").on("click", function (event) {
        var $item = $(this),
            $target = $(event.target);

        if ($target.is("a.ui-icon-trash")) {
            deleteImage($item);
        } else if ($target.is("a.ui-icon-zoomin")) {
            viewLargerImage($target);
        } else if ($target.is("a.ui-icon-refresh")) {
            recycleImage($item);
        }

        return false;
    });
});
