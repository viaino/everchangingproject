/* instagram */
$(function () {
    try {
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
                url = datas[i].node.display_url;
                if(i == 0) {
                    this.html = `
                    <div class="carousel-item active">
                    <img src="${url}" class="card-img-top">
                    </div>
                    `;
                } else {
                    this.html = `
                    <div class="carousel-item">
                    <img src="${url}" class="card-img-top">
                    </div>
                    `;
                }
                $(".insta-card").append(this.html);
            }
        });
    } catch (error) {
        alert(error);
    }
})