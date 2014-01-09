/*
 * Qt5 bitcoin GUI.
 *
 * WebUI Nuyen Developers 2014
 *
 */

#include "webinterfacer.h"

void webInterfacer::jsOpenTransactions()
{
    emit this->openTransactions();
}

void webInterfacer::jsOpenSendPage()
{
    emit this->openSendPage(QString(""));
}

void webInterfacer::jsOpenRecievePage(){
    emit this->openRecievePage(QString(""));
}

void webInterfacer::jsOpenAddressPage(){
    emit this->openAddressBookPage();
}
