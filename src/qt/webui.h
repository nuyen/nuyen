#ifndef WEBUI_H
#define WEBUI_H

#include <QWidget>

namespace Ui {
    class webui;
}
class WalletModel;
class webInterfacer;
class webui : public QWidget
{
    Q_OBJECT



public:
    explicit webui(QWidget *parent = 0);
    ~webui();
    void setWalletModel(WalletModel *walletModel);

private:
    Ui::webui *ui;
    WalletModel *walletModel;
    webInterfacer *webInterface;
};

#endif // WEBUI_H
