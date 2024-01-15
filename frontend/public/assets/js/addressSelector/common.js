(()=>{
    var e, i, r, t, n, a;
    if ($("#fromProvince").length > 0) {
        $("#fromProvince").selectize({
            onChange: function(e) {
                e.length && (t.disable(),
                t.clearOptions(),
                n.disable(),
                n.clearOptions(),
                t.load((function(i) {
                    $.ajax({
                        url: "/api/home/getJSONDistrict/" + e,
                        success: function(e) {
                            t.enable(),
                            i(e)
                        },
                        error: function() {
                            i()
                        }
                    })
                }
                )))
            }
        });
        var c = $("#fromDistrict").selectize({
            valueField: "id",
            labelField: "text",
            onChange: function(e) {
                e.length && (n.disable(),
                n.clearOptions(),
                n.load((function(i) {
                    $.ajax({
                        url: "/api/home/getJSONDistrict/" + e,
                        success: function(e) {
                            n.enable(),
                            i(e)
                        },
                        error: function() {
                            i()
                        }
                    })
                }
                )))
            }
        });
        t = c[0].selectize;
        var l = $("#fromWard").selectize({
            valueField: "id",
            labelField: "text"
        });
        n = l[0].selectize
    }
    if ($("#toProvince").length > 0) {
        var o = $("#toProvince").selectize({
            onChange: function(r) {
                r.length && (e.disable(),
                e.clearOptions(),
                i.disable(),
                i.clearOptions(),
                e.load((function(i) {
                    $.ajax({
                        url: "/api/home/getJSONDistrict/" + r,
                        success: function(r) {
                            e.enable(),
                            i(r)
                        },
                        error: function() {
                            i()
                        }
                    })
                }
                )))
            }
        });
        r = o[0].selectize;
        var d = $("#toDistrict").selectize({
            valueField: "id",
            labelField: "text",
            onChange: function(e) {
                e.length && (i.disable(),
                i.clearOptions(),
                i.load((function(r) {
                    $.ajax({
                        url: "/api/home/getJSONDistrict/" + e,
                        success: function(e) {
                            i.enable(),
                            r(e)
                        },
                        error: function() {
                            r()
                        }
                    })
                }
                )))
            }
        });
        if (d[0]) {
            e = d[0].selectize;
            var s = $("#toWard").selectize({
                valueField: "id",
                labelField: "text"
            });
            i = s[0].selectize
        }
    }
    $("#senderAddress").selectize({
        valueField: "id",
        labelField: "text"
    }),
    $("#receiverName").selectize({
        persist: !1,
        maxItems: 1,
        create: function(e) {
            return {
                id: e,
                text: e
            }
        },
        valueField: "id",
        labelField: "text",
        load: function(e, i) {
            if (!e.length)
                return i();
            $.ajax({
                url: "/dashboard/search/receiver",
                type: "GET",
                dataType: "json",
                data: {
                    keyword: e
                },
                error: function() {
                    i()
                },
                success: function(e) {
                    a = e;
                    var r = e.map((function(e) {
                        return {
                            id: e.id,
                            text: e.receiver + " - " + e.receiver_phone + " - " + e.receiver_full_address,
                            allData: e
                        }
                    }
                    ));
                    i(r)
                }
            })
        },
        onItemAdd: function(t) {
            if ($("#toDistrict").find("option").remove().end(),
            $("#toWard").find("option").remove().end(),
            $("#receiverNameHidden").val(t),
            a) {
                var n = a.find((function(e) {
                    return e.id === parseInt(t)
                }
                ));
                n && ($("#receiverPhone").val(n.receiver_phone),
                $("#toProvince").val(n.receiver_province),
                $("#receiverAddress").val(n.receiver_address),
                $("#receiverNameHidden").val(n.receiver),
                e.clearOptions(),
                i.clearOptions(),
                r.addOption({
                    id: n.receiver_province,
                    text: n.receiver_province_name
                }),
                r.setValue(n.receiver_province),
                e.addOption({
                    id: n.receiver_district,
                    text: n.receiver_district_name
                }),
                e.setValue(n.receiver_district),
                i.addOption({
                    id: n.receiver_ward,
                    text: n.receiver_ward_name
                }),
                i.setValue(n.receiver_ward),
                getEstimateFee())
            }
        }
    })
}
)();
