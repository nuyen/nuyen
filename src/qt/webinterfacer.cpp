#include "webinterfacer.h"

void webInterfacer::jsOpenTransactions()
{

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
