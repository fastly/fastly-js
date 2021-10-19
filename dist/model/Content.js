"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Content model module.
 * @module model/Content
 * @version 3.0.0-alpha1
 */
var Content = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Content</code>.
   * @alias module:model/Content
   */
  function Content() {
    _classCallCheck(this, Content);

    Content.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Content, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Content</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Content} obj Optional instance to populate.
     * @return {module:model/Content} The populated <code>Content</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Content();

        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }

        if (data.hasOwnProperty('pop')) {
          obj['pop'] = _ApiClient["default"].convertToType(data['pop'], 'String');
        }

        if (data.hasOwnProperty('request')) {
          obj['request'] = _ApiClient["default"].convertToType(data['request'], Object);
        }

        if (data.hasOwnProperty('response')) {
          obj['response'] = _ApiClient["default"].convertToType(data['response'], Object);
        }

        if (data.hasOwnProperty('response_time')) {
          obj['response_time'] = _ApiClient["default"].convertToType(data['response_time'], 'Number');
        }

        if (data.hasOwnProperty('server')) {
          obj['server'] = _ApiClient["default"].convertToType(data['server'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Content;
}();
/**
 * @member {String} hash
 */


Content.prototype['hash'] = undefined;
/**
 * @member {String} pop
 */

Content.prototype['pop'] = undefined;
/**
 * @member {Object} request
 */

Content.prototype['request'] = undefined;
/**
 * @member {Object} response
 */

Content.prototype['response'] = undefined;
/**
 * @member {Number} response_time
 */

Content.prototype['response_time'] = undefined;
/**
 * @member {String} server
 */

Content.prototype['server'] = undefined;
var _default = Content;
exports["default"] = _default;