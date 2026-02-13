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
 * The PackageMetadata model module.
 * @module model/PackageMetadata
 * @version 15.0.0-beta.4
 */
class PackageMetadata {
    /**
     * Constructs a new <code>PackageMetadata</code>.
     * [Package metadata](#metadata-model) that has been extracted from the uploaded package. 
     * @alias module:model/PackageMetadata
     */
    constructor() { 
        
        PackageMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PackageMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PackageMetadata} obj Optional instance to populate.
     * @return {module:model/PackageMetadata} The populated <code>PackageMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PackageMetadata();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('authors')) {
                obj['authors'] = ApiClient.convertToType(data['authors'], ['String']);
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('hashsum')) {
                obj['hashsum'] = ApiClient.convertToType(data['hashsum'], 'String');
            }
            if (data.hasOwnProperty('files_hash')) {
                obj['files_hash'] = ApiClient.convertToType(data['files_hash'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the Compute package.
 * @member {String} name
 */
PackageMetadata.prototype['name'] = undefined;

/**
 * Description of the Compute package.
 * @member {String} description
 */
PackageMetadata.prototype['description'] = undefined;

/**
 * A list of package authors' email addresses.
 * @member {Array.<String>} authors
 */
PackageMetadata.prototype['authors'] = undefined;

/**
 * The language of the Compute package.
 * @member {String} language
 */
PackageMetadata.prototype['language'] = undefined;

/**
 * Size of the Compute package in bytes. This is deprecated along with `hashsum`.
 * @member {Number} size
 */
PackageMetadata.prototype['size'] = undefined;

/**
 * Hash of the Compute package. This is deprecated in favor of `files_hash`.
 * @member {String} hashsum
 */
PackageMetadata.prototype['hashsum'] = undefined;

/**
 * Hash of the files within the Compute package.
 * @member {String} files_hash
 */
PackageMetadata.prototype['files_hash'] = undefined;






export default PackageMetadata;

