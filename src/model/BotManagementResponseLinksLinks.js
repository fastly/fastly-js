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
 * The BotManagementResponseLinksLinks model module.
 * @module model/BotManagementResponseLinksLinks
 * @version 15.0.0-beta.1
 */
class BotManagementResponseLinksLinks {
    /**
     * Constructs a new <code>BotManagementResponseLinksLinks</code>.
     * @alias module:model/BotManagementResponseLinksLinks
     */
    constructor() { 
        
        BotManagementResponseLinksLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BotManagementResponseLinksLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementResponseLinksLinks} obj Optional instance to populate.
     * @return {module:model/BotManagementResponseLinksLinks} The populated <code>BotManagementResponseLinksLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementResponseLinksLinks();

            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Location of resource
 * @member {String} self
 */
BotManagementResponseLinksLinks.prototype['self'] = undefined;

/**
 * Location of the service resource
 * @member {String} service
 */
BotManagementResponseLinksLinks.prototype['service'] = undefined;






export default BotManagementResponseLinksLinks;

