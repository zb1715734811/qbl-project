const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        remark: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        options.id && this.setData({
            houseId: options.id
        }),options.flag && this.setData({
            flag: options.flag
        }),options.remark && this.setData({
            remark2: options.remark
        })
    },

    // 输入备注
    onChangeRemark(e) {
        this.setData({
            remark: e.detail.replace(/\s*/g, "")
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    // 立即通过
    checkNow() {
        if (this.data.remark.length > 100) {
            return wx.showModal({
                title: '提示',
                content: '字数超出, 100个以内',
                showCancel: !1
            })
        }
        // 初审
        if ('1'==this.data.flag){
            wx.showModal({
                title: '提示',
                content: '确定要通过吗?',
                success: res => {
                    if (res.confirm) {
                        app.util.req({
                            url: 'upd_house_state',
                            method: 'POST',
                            data: {
                                token: app.token,
                                houseId: this.data.houseId,
                                houseState: 3,
                                recRemark: this.data.remark,
                                remark: this.data.remark2
                            }
                        }).then(res2 => {
                            const data = res2.data
                            if ('0' == data.err_code) {
                                wx.showModal({
                                    title: '提示',
                                    content: '初审成功',
                                    showCancel: !1,
                                    success: res => {
                                        if (res.confirm) {
                                            wx.navigateBack()
                                        }
                                    }
                                })
                            } else {
                                wx.showModal({
                                    title: '提示',
                                    content: data.err_msg,
                                    showCancel: !1,
                                })
                            }
                        })
                    }
                }
            })
        }else{ // 终审
            wx.showModal({
                title: '提示',
                content: '确定要通过吗?',
                success: res => {
                    if (res.confirm) {
                        app.util.req({
                            url: 'upd_house_state',
                            method: 'POST',
                            data: {
                                token: app.token,
                                houseId: this.data.houseId,
                                houseState: 1,
                                recRemark: this.data.remark,
                                remark: this.data.remark2
                            }
                        }).then(res2 => {
                            const data = res2.data
                            if ('0' == data.err_code) {
                                wx.showModal({
                                    title: '提示',
                                    content: '终审成功',
                                    showCancel: !1,
                                    success: res => {
                                        if (res.confirm) {
                                            wx.navigateBack()
                                        }
                                    }
                                })
                            } else {
                                wx.showModal({
                                    title: '提示',
                                    content: data.err_msg,
                                    showCancel: !1,
                                })
                            }
                        })
                    }
                }
            })
        }
    },

    // 拒绝通过
    checkNo() {
        if (this.data.remark.length > 100) {
            return wx.showModal({
                title: '提示',
                content: '字数超出, 100个以内',
                showCancel: !1
            })
        }else if (''==this.data.remark){
            return wx.showModal({
                title: '提示',
                content: '请输入不通过原因',
                showCancel: !1
            })
        }
        if ('1'==this.data.flag){ // 初审
            wx.showModal({
                title: '提示',
                content: '确定要拒绝吗?',
                success: res => {
                    if (res.confirm) {
                        app.util.req({
                            url: 'upd_house_state',
                            method: 'POST',
                            data: {
                                token: app.token,
                                houseId: this.data.houseId,
                                houseState: 4,
                                recRemark: this.data.remark,
                                remark: this.data.remark2
                            }
                        }).then(res2 => {
                            const data = res2.data
                            if ('0' == data.err_code) {
                                wx.showModal({
                                    title: '提示',
                                    content: '成功',
                                    showCancel: !1,
                                    success: res => {
                                        if (res.confirm) {
                                            wx.navigateBack({delta: 2})
                                        }
                                    }
                                })
                            } else {
                                wx.showModal({
                                    title: '提示',
                                    content: data.err_msg,
                                    showCancel: !1,
                                })
                            }
                        })
                    }
                }
            })
        }else{ //终审
            wx.showModal({
                title: '提示',
                content: '确定要拒绝吗?',
                success: res => {
                    if (res.confirm) {
                        app.util.req({
                            url: 'upd_house_state',
                            method: 'POST',
                            data: {
                                token: app.token,
                                houseId: this.data.houseId,
                                houseState: 6,
                                recRemark: this.data.remark,
                                remark: this.data.remark2
                            }
                        }).then(res2 => {
                            const data = res2.data
                            if ('0' == data.err_code) {
                                wx.showModal({
                                    title: '提示',
                                    content: '成功',
                                    showCancel: !1,
                                    success: res => {
                                        if (res.confirm) {
                                            wx.navigateBack()
                                        }
                                    }
                                })
                            } else {
                                wx.showModal({
                                    title: '提示',
                                    content: data.err_msg,
                                    showCancel: !1,
                                })
                            }
                        })
                    }
                }
            })
        }
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})