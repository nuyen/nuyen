/*
 * Qt5 bitcoin GUI.
 *
 * WebUI Nuyen Developers 2014
 *
 */

#include "webui.h"
#include "ui_webui.h"
#include "walletmodel.h"
#include "optionsmodel.h"
#include "webinterfacer.h"
#include "bitcoinunits.h"

#include <QWebFrame>

webui::webui(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::webui)
{
    webInterface = new webInterfacer();
    ui->setupUi(this);
    ui->webView->page()->currentFrame()->addToJavaScriptWindowObject(QString("qtInterface"), webInterface);
}

void webui::setWalletModel(WalletModel *model)
{
    this->walletModel = model;
    if(model && model->getOptionsModel())
    {
        int unit = model->getOptionsModel()->getDisplayUnit();
        webInterface->setProperty("balance",QVariant(BitcoinUnits::formatWithUnit(unit, model->getBalance())));
        webInterface->setProperty("unconfirmedBalance",QVariant(BitcoinUnits::formatWithUnit(unit, model->getUnconfirmedBalance())));
        webInterface->setProperty("immatureBalance",QVariant(BitcoinUnits::formatWithUnit(unit, model->getImmatureBalance())));
    }
}

webui::~webui()
{
    delete ui;
}
