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
 * The LoggingElasticsearchAdditional model module.
 * @module model/LoggingElasticsearchAdditional
 * @version 12.1.0
 */
class LoggingElasticsearchAdditional {
    /**
     * Constructs a new <code>LoggingElasticsearchAdditional</code>.
     * @alias module:model/LoggingElasticsearchAdditional
     */
    constructor() { 
        
        LoggingElasticsearchAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingElasticsearchAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingElasticsearchAdditional} obj Optional instance to populate.
     * @return {module:model/LoggingElasticsearchAdditional} The populated <code>LoggingElasticsearchAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingElasticsearchAdditional();

            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('pipeline')) {
                obj['pipeline'] = ApiClient.convertToType(data['pipeline'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, `#{%F}` will interpolate as `YYYY-MM-DD` with today's date.
 * @member {String} index
 */
LoggingElasticsearchAdditional.prototype['index'] = undefined;

/**
 * The URL to stream logs to. Must use HTTPS.
 * @member {String} url
 */
LoggingElasticsearchAdditional.prototype['url'] = undefined;

/**
 * The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html).
 * @member {String} pipeline
 */
LoggingElasticsearchAdditional.prototype['pipeline'] = undefined;

/**
 * Basic Auth username.
 * @member {String} user
 */
LoggingElasticsearchAdditional.prototype['user'] = undefined;

/**
 * Basic Auth password.
 * @member {String} password
 */
LoggingElasticsearchAdditional.prototype['password'] = undefined;

/**
 * A Fastly [log format string](https://www.fastly.com/documentation/guides/integrations/streaming-logs/custom-log-formats/). Must produce valid JSON that Elasticsearch can ingest.
 * @member {String} format
 */
LoggingElasticsearchAdditional.prototype['format'] = undefined;






export default LoggingElasticsearchAdditional;

