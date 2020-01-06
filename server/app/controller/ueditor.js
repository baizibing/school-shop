const Controller = require('egg').Controller;

module.exports = class extends Controller {
    async index() {
        this.ctx.sendRes(this.ctx, {
            code: 1,
            status: 200
        });
    }

    async home() {
        let { ctx } = this;
        console.log(ctx.request)
        ctx.body = {
            code:1
        }
    }

}