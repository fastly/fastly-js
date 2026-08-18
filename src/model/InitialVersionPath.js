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
import RuleCreate from './RuleCreate';

/**
 * The InitialVersionPath model module.
 * @module model/InitialVersionPath
 * @version 16.1.0
 */
class InitialVersionPath {
    /**
     * Constructs a new <code>InitialVersionPath</code>.
     * A path on the initial version, with its rules.
     * @alias module:model/InitialVersionPath
     * @param path {String} The URL path pattern, beginning with `/`. Maximum 2048 characters.
     */
    constructor(path) { 
        
        InitialVersionPath.initialize(this, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path) { 
        obj['path'] = path;
    }

    /**
     * Constructs a <code>InitialVersionPath</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InitialVersionPath} obj Optional instance to populate.
     * @return {module:model/InitialVersionPath} The populated <code>InitialVersionPath</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InitialVersionPath();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [RuleCreate]);
            }
        }
        return obj;
    }


}

/**
 * The URL path pattern, beginning with `/`. Maximum 2048 characters.
 * @member {String} path
 */
InitialVersionPath.prototype['path'] = undefined;

/**
 * The rules to create on this path.
 * @member {Array.<module:model/RuleCreate>} rules
 */
InitialVersionPath.prototype['rules'] = undefined;






export default InitialVersionPath;

