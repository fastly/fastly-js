/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DdosProtectionRequestEnableMode model module.
 * @module model/DdosProtectionRequestEnableMode
 * @version 15.0.0-beta.0
 */
class DdosProtectionRequestEnableMode {
    /**
     * Constructs a new <code>DdosProtectionRequestEnableMode</code>.
     * @alias module:model/DdosProtectionRequestEnableMode
     */
    constructor() { 
        
        DdosProtectionRequestEnableMode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DdosProtectionRequestEnableMode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DdosProtectionRequestEnableMode} obj Optional instance to populate.
     * @return {module:model/DdosProtectionRequestEnableMode} The populated <code>DdosProtectionRequestEnableMode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DdosProtectionRequestEnableMode();

            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Operation mode
 * @member {module:model/DdosProtectionRequestEnableMode.ModeEnum} mode
 */
DdosProtectionRequestEnableMode.prototype['mode'] = undefined;





/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
DdosProtectionRequestEnableMode['ModeEnum'] = {

    /**
     * value: "false"
     * @const
     */
    "false": "false",

    /**
     * value: "log"
     * @const
     */
    "log": "log",

    /**
     * value: "block"
     * @const
     */
    "block": "block"
};



export default DdosProtectionRequestEnableMode;

