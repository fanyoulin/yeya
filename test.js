// console.log(textMatches(/(.*reactivate.*)/).findOne(10000));




log("---------------------------------------------------------------")
if (text("Save Login Information").exists()&&text("Log In").exists()) {
    log("登录页面,输入账号密码")
    setText(0,"575589530@qq.com")
    setText(1,"ChenJuan19980320")
    sleep(2000)
    var 保存账号信息 =  text("Save Login Information").findOne(3000)
    if (保存账号信息!=null) {
        log("点击保存")
        click(保存账号信息.bounds().centerX(),保存账号信息.bounds().centerY())
    }else{
        log("未找到保存")
    }
    var 登录按钮 =  text("Log In").findOne(3000)
    if (登录按钮!=null) {
        log("点击LOG IN")
        click(登录按钮.bounds().centerX(),登录按钮.bounds().centerY())
    }
}

// @hotmail.com----a54U4ZTp8vJ3--------王权之忆
// @hotmail.com----rkpv57tf7954----gsgy5buWwj----昵称：cfd3thoroughly
// @hotmail.com----nt957xsq0t----ZnCedD45----昵称：kxyz11prg7

// @hotmail.com----02683gy117e----sxDDH822----昵称：7g6jelmsxe
// @hotmail.com----31755ek10w----y45Zhd73----昵称：8qfkuwhgq
// @hotmail.com----zc916a2375j----4h9bgN20----昵称：6ypu4msx
// @hotmail.com----67589dsy0----PPxOo582----昵称：ues79r0y
// @hotmail.com----kn7092h0e4rd9----2085iq22----昵称：r8ga2nva9i
// @outlook.com----d7f72wut5071----n624Fquxtb----昵称：oozfbasically
// wazitajni1@hotmail.com----fc051qvbd----siCGIq11----昵称：HoByungman