#ifndef WEBUI_H
#define WEBUI_H

#include <QWidget>

namespace Ui {
class webui;
}

class webui : public QWidget
{
    Q_OBJECT

public:
    explicit webui(QWidget *parent = 0);
    ~webui();

private:
    Ui::webui *ui;
};

#endif // WEBUI_H
