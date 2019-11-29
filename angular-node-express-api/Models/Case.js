let mysqlConfig = require("../Utilities/mysqlConfig");

let initialize = () => {
    mysqlConfig.getDB().query("CREATE TABLE IF NOT EXISTS `case` (`id` INT NOT NULL, `type` VARCHAR(45) NOT NULL, `title` VARCHAR(45) NOT NULL, `isApproved` BOOL NOT NULL, PRIMARY KEY(`id`));");
    mysqlConfig.getDB().query("ALTER TABLE `case` CHANGE `id` `id` INT(11) NOT NULL AUTO_INCREMENT;");
}

module.exports = {
    initialize: initialize
}