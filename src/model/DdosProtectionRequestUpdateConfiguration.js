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
 * The DdosProtectionRequestUpdateConfiguration model module.
 * @module model/DdosProtectionRequestUpdateConfiguration
 * @version 14.1.0
 */
class DdosProtectionRequestUpdateConfiguration {
    /**
     * Constructs a new <code>DdosProtectionRequestUpdateConfiguration</code>.
     * @alias module:model/DdosProtectionRequestUpdateConfiguration
     * @param mode {module:model/DdosProtectionRequestUpdateConfiguration.ModeEnum} Operation mode
     */
    constructor(mode) { 
        
        DdosProtectionRequestUpdateConfiguration.initialize(this, mode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mode) { 
        obj['mode'] = mode;
    }

    /**
     * Constructs a <code>DdosProtectionRequestUpdateConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DdosProtectionRequestUpdateConfiguration} obj Optional instance to populate.
     * @return {module:model/DdosProtectionRequestUpdateConfiguration} The populated <code>DdosProtectionRequestUpdateConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DdosProtectionRequestUpdateConfiguration();

            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Operation mode
 * @member {module:model/DdosProtectionRequestUpdateConfiguration.ModeEnum} mode
 */
DdosProtectionRequestUpdateConfiguration.prototype['mode'] = undefined;





/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
DdosProtectionRequestUpdateConfiguration['ModeEnum'] = {

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



export default DdosProtectionRequestUpdateConfiguration;

