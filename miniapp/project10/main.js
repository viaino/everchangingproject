/* instagram */
$(function () {
    try {
        // インスタのIDを入れようね
        this.name = "via_jpn";
        $.ajax('https://www.instagram.com/' + this.name + '/', {
            timeout: 2000,
            datatype: 'html'
        }).then(function (data) {
            json_string = data.split("window._sharedData = ")[1];
            json_string = json_string.split("};</script>")[0] + "}";
            this.Arrya_data = JSON.parse(json_string);
            let datas = this.Arrya_data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;
            for (i in datas) {
                // 画像URL取得
                var url = datas[i].node.display_url;
                // テキスト取得
                var text = datas[i].node.edge_media_to_caption.edges[0].node.text;

                this.html = `
                <div class="cardImgWrp p-3">
                <img src="${url}">
                <p>${text}</p>
                </div>
                `;
                $(".insta-card").append(this.html);
            }
        });
    } catch (error) {
        alert(error);
    }
})