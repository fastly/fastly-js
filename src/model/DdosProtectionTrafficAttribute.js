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
* Enum class DdosProtectionTrafficAttribute.
* @enum {}
* @readonly
*/
export default class DdosProtectionTrafficAttribute {
    
        /**
         * value: "source_ip"
         * @const
         */
        "source_ip" = "source_ip";

    
        /**
         * value: "country_code"
         * @const
         */
        "country_code" = "country_code";

    
        /**
         * value: "host"
         * @const
         */
        "host" = "host";

    
        /**
         * value: "asn"
         * @const
         */
        "asn" = "asn";

    
        /**
         * value: "source_ip_prefix"
         * @const
         */
        "source_ip_prefix" = "source_ip_prefix";

    
        /**
         * value: "user_agent"
         * @const
         */
        "user_agent" = "user_agent";

    
        /**
         * value: "method_path"
         * @const
         */
        "method_path" = "method_path";

    

    /**
    * Returns a <code>DdosProtectionTrafficAttribute</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DdosProtectionTrafficAttribute} The enum <code>DdosProtectionTrafficAttribute</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

