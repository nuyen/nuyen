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
