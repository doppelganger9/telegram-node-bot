'use strict'

/**
 * Base inline query controller
 * you must extend TelegramBaseInlineQueryController
 * and override at least the handle method to create controller
 */
class TelegramBaseInlineQueryController {
    constructor() {
        this._api = null
        this._localization = null
    }
    
    /**
     * This method of your controller will be called to handle inline query.
     *
     * @param {InlineScope} scope
     */
    handle(scope) { throw 'Not implemented' }

    /**
     * This method will be called before any command handler or handle method.
     * You can modify incoming scope and must return it.
     * Your modified scope will be passed to controller.
     *
     * @param {Scope} scope
     * @returns {Scope}
     */
    before(scope) { return scope }
    
    /**
     *
     * @param {ChosenInlineResult} result
     */
    chosenResult(result) { }
    
    /**
     *
     * @param {TelegramApi} api
     */
    set api(api) {
        this._api = api
    }

    /**
     *
     * @param {Ivan} localization
     */
    set localization(localization) {
        this._localization = localization
    }
}

module.exports = TelegramBaseInlineQueryController
