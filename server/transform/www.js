exports.filedownload = async (session, models, vars) => {
    session.openFile(vars.download);
};
exports.dialog_alert = async (session, models, vars) => {
    await session.alert(vars.dialog.message);
    session.transform.www.acceptDialog();
};
exports.dialog_confirm = async (session, models, vars) => {
    if(await session.confirm(vars.dialog.message)) {
        session.transform.www.acceptDialog();
    } else {
        session.transform.www.dismissDialog();
    }
};
exports.dialog_prompt = async (session, models, vars) => {
    let prompt = await session.prompt(vars.dialog.message, { value: vars.dialog.defaultPrompt});
    if(prompt != null) {
        session.transform.www.acceptDialog(prompt);
    } else {
        session.transform.www.dismissDialog();
    }
};
exports.dialog_beforeunload = async (session, models, vars) => {
    if(await session.confirm(vars.dialog.message, {okLabel: 'Leave'})) {
        session.transform.www.acceptDialog();
    } else {
        session.transform.www.dismissDialog();
    }
};