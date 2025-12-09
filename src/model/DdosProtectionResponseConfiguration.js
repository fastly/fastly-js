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
import DdosProtectionResponseConfigurationConfiguration from './DdosProtectionResponseConfigurationConfiguration';

/**
 * The DdosProtectionResponseConfiguration model module.
 * @module model/DdosProtectionResponseConfiguration
 * @version 14.1.0
 */
class DdosProtectionResponseConfiguration {
    /**
     * Constructs a new <code>DdosProtectionResponseConfiguration</code>.
     * @alias module:model/DdosProtectionResponseConfiguration
     */
    constructor() { 
        
        DdosProtectionResponseConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DdosProtectionResponseConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DdosProtectionResponseConfiguration} obj Optional instance to populate.
     * @return {module:model/DdosProtectionResponseConfiguration} The populated <code>DdosProtectionResponseConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DdosProtectionResponseConfiguration();

            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = DdosProtectionResponseConfigurationConfiguration.constructFromObject(data['configuration']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DdosProtectionResponseConfigurationConfiguration} configuration
 */
DdosProtectionResponseConfiguration.prototype['configuration'] = undefined;






export default DdosProtectionResponseConfiguration;

