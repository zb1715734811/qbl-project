const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        flag: 2
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (options.data) {
            const data = JSON.parse(options.data)
            if ('1' == data.propertyType) {
                data.propertyText = '商品房 '
            } else if ('2' == data.propertyType) {
                data.propertyText = '经济适用住房'
            } else if ('3' == data.propertyType) {
                data.propertyText = '集资建房'
            } else if ('4' == data.propertyType) {
                data.propertyText = '房改房'
            } else if ('5' == data.propertyType) {
                data.propertyText = '农权房'
            } else if ('6' == data.propertyType) {
                data.propertyText = '自建房'
            } else if ('7' == data.propertyType) {
                data.propertyText = '廉租房'
            } else if ('8' == data.propertyType) {
                data.propertyText = '其他'
            }

            switch (data.strctType) {
                case 1:
                    data.strctText = '框架'
                    break
                case 2:
                    data.strctText = '砖混'
                    break
                case 3:
                    data.strctText = '砖木'
                    break
                case 4:
                    data.strctText = '土木'
                    break
                case 5:
                    data.strctText = '其他'
                    break
            }

            switch (data.houseState) {
                case 1:
                    data.houseStateText = '已备案'
                    break
                case 2:
                    data.houseStateText = '未审批'
                    break
                case 3:
                    data.houseStateText = '申报通过'
                    break
                case 4:
                    data.houseStateText = '申报失败'
                    break
            }

            this.setData({
                data
            })
        }
        options.flag && this.setData({flag: options.flag})
    },

    showPreImage(e) {
        const arr = []
        arr.push(e.currentTarget.dataset.src + '')
        wx.previewImage({
            urls: arr,
            current: ''
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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