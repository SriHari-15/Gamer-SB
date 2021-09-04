module.exports = async (message, args) => {
  message.delete();
  switch (args) {
    case "buy":
      message.channel.send("<https://gta.2take1.menu/purchase/>");
      break;
    case "setup":
      message.channel.send("<https://gta.2take1.menu/setup/>");
      break;
    case "fivem":
      message.channel.send("<https://2take1.menu/dload/fivem>");
      break;
    case "money":
      message.channel.send(
        "If you have VIP, you can use the business manager to get money\nIf you only have standard, you can use Heist Control lua (#lua-script-share)"
      );
      break;
    case "vip":
      message.channel.send("DM <@883362016289513472> with `$vip`");
      break;
    case "update":
      message.channel.send(
        "When a new version is released, the Popstar launcher will notify you about it. In order to update the menu, delete all the files that you extracted from the ZIP and download the menu again from the website. Updating 2Take1Menu will only replace the menu files; the menu data, such as credentials, settings and other assets, will remain intact."
      );
      break;
    default:
      break;
  }
};
