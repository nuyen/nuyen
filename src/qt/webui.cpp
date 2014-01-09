/*
 * Qt5 bitcoin GUI.
 *
 * WebUI Nuyen Developers 2014
 *
 */

#include "webui.h"
#include "ui_webui.h"

webui::webui(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::webui)
{
    ui->setupUi(this);
}

webui::~webui()
{
    delete ui;
}
