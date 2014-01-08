#ifndef WEBINTERFACER_H
#define WEBINTERFACER_H

#include <QObject>

class webInterfacer : public QObject
{
Q_OBJECT
public slots:
    void jsOpenTransactions();
    void jsOpenSendPage();
    void jsOpenRecievePage();
    void jsOpenAddressPage();

signals:
    void openTransactions(const QModelIndex &index);
    void openSendPage(QString);
    void openRecievePage(QString);
    void openAddressBookPage();
};



#endif // WEBINTERFACER_H
