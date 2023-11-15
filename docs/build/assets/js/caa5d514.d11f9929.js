'use strict';
(self.webpackChunkmy_docs = self.webpackChunkmy_docs || []).push([
  [983],
  {
    8221: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => h,
          contentTitle: () => d,
          default: () => x,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => o,
        });
      var i = t(5893),
        l = t(1151),
        r = t(435);
      const s = {
          sidebar_position: 12,
          sidebar_label: 'Panel3',
          description:
            'The circle-shaped slider, with its wheel style design, is utilized to adjust the hue and saturation of colors.',
        },
        d = '<Panel3 />',
        c = {
          id: 'API/Panel3',
          title: '<Panel3 />',
          description:
            'The circle-shaped slider, with its wheel style design, is utilized to adjust the hue and saturation of colors.',
          source: '@site/docs/API/Panel3.mdx',
          sourceDirName: 'API',
          slug: '/API/Panel3',
          permalink: '/reanimated-color-picker/docs/API/Panel3',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 12,
          frontMatter: {
            sidebar_position: 12,
            sidebar_label: 'Panel3',
            description:
              'The circle-shaped slider, with its wheel style design, is utilized to adjust the hue and saturation of colors.',
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'Panel2', permalink: '/reanimated-color-picker/docs/API/Panel2' },
          next: { title: 'Panel4', permalink: '/reanimated-color-picker/docs/API/Panel4' },
        },
        h = {},
        o = [
          { value: 'Props', id: 'props', level: 2 },
          { value: '<code>centerChannel </code>', id: 'centerchannel-', level: 3 },
          { value: '<code>boundedThumb</code>', id: 'boundedthumb', level: 3 },
          { value: '<code>thumbSize</code>', id: 'thumbsize', level: 3 },
          { value: '<code>thumbColor</code>', id: 'thumbcolor', level: 3 },
          { value: '<code>thumbShape</code>', id: 'thumbshape', level: 3 },
          { value: '<code>thumbStyle</code>', id: 'thumbstyle', level: 3 },
          { value: '<code>thumbInnerStyle</code>', id: 'thumbinnerstyle', level: 3 },
          { value: '<code>adaptSpectrum</code>', id: 'adaptspectrum', level: 3 },
          { value: '<code>style</code>', id: 'style', level: 3 },
        ];
      function a(e) {
        const n = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          img: 'img',
          li: 'li',
          mdxAdmonitionTitle: 'mdxAdmonitionTitle',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, l.a)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.h1, { id: 'panel3-', children: (0, i.jsx)(n.code, { children: '<Panel3 />' }) }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                (0, i.jsx)(n.img, { alt: 'panel3-saturation', src: t(1576).Z + '', width: '200', height: '200' }),
                ' < or > ',
                (0, i.jsx)(n.img, { alt: 'panel3-brightness', src: t(2661).Z + '', width: '200', height: '200' }),
              ],
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, {
                      children:
                        'The circle-shaped slider, with its wheel style design, is utilized to adjust the hue and (saturation or brightness) of colors.',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: "Move thumb (handle) around the center to change the color's hue." }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'Move thumb (handle) away or toward the center to change the saturation or the brightness of the color, depending on the ',
                        (0, i.jsx)(n.code, { children: 'verticalChannel' }),
                        ' prop..',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.admonition, {
              type: 'tip',
              children: (0, i.jsxs)(n.p, {
                children: [
                  'If you want to give your users more control over the color selection, you can add another slider next to this one that adjusts the opposite channel. For example, if ',
                  (0, i.jsx)(n.code, { children: 'centerChannel' }),
                  ' is ',
                  (0, i.jsx)(n.code, { children: '"saturation"' }),
                  ', you can add a ',
                  (0, i.jsx)(n.a, {
                    href: './BrightnessSlider',
                    children: (0, i.jsx)(n.code, { children: '<BrightnessSlider />' }),
                  }),
                  ' slider, and vice versa.',
                ],
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'props', children: 'Props' }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'centerchannel-', children: (0, i.jsx)(n.code, { children: 'centerChannel ' }) }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children:
                    'Determines which color channel to adjust when moving the thumb towards or away from the center of the circular slider.',
                }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: 'type: "saturation" | "brightness"' }) }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: 'default: "saturation"' }) }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'boundedthumb', children: (0, i.jsx)(n.code, { children: 'boundedThumb' }) }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children:
                    'Determines whether the panel slider thumb (or handle) should be constrained to stay within the boundaries of the panel.',
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    'When set to ',
                    (0, i.jsx)(n.code, { children: 'true' }),
                    ', the thumb will not be allowed to move beyond the edges of the panel.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    'When set to ',
                    (0, i.jsx)(n.code, { children: 'false' }),
                    ', part of it will be outside of the panel bounds.',
                  ],
                }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: 'type: boolean' }) }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: 'default: false' }) }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'thumbsize', children: (0, i.jsx)(n.code, { children: 'thumbSize' }) }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, { children: "Panel's handle (thumb) size (height*width)." }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: 'type: number' }) }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: 'default: 35' }) }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'thumbcolor', children: (0, i.jsx)(n.code, { children: 'thumbColor' }) }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, { children: "Change thumb's color." }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: 'type: string' }) }),
                '\n',
                (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: 'default' }), ': interactive*'] }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.admonition, {
              type: 'info',
              children: [
                (0, i.jsx)(n.mdxAdmonitionTitle, { children: (0, i.jsx)(n.strong, { children: '*interactive' }) }),
                (0, i.jsxs)(n.ul, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.li, {
                      children: 'The thumb color will be changed depending on the contrast ratio if no color value is passed.',
                    }),
                    '\n',
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'thumbshape', children: (0, i.jsx)(n.code, { children: 'thumbShape' }) }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, { children: "Change thumb's shape and appearance." }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: 'type: string' }) }),
                '\n',
                (0, i.jsxs)(n.li, { children: [(0, i.jsx)(n.code, { children: 'values' }), ': ', (0, i.jsx)('shapes', {})] }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: "default: 'ring'" }) }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'thumbstyle', children: (0, i.jsx)(n.code, { children: 'thumbStyle' }) }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, { children: "Thumb's containing View's style." }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: 'type: ViewStyle' }) }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'thumbinnerstyle', children: (0, i.jsx)(n.code, { children: 'thumbInnerStyle' }) }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, { children: "Thumb's inner View(s) style." }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: 'type: ViewStyle' }) }),
                '\n',
              ],
            }),
            '\n',
            '\n',
            '\n',
            (0, i.jsx)(r.ZP, {}),
            '\n',
            (0, i.jsx)(n.h3, { id: 'adaptspectrum', children: (0, i.jsx)(n.code, { children: 'adaptSpectrum' }) }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children: 'Slider background color spectrum adapts to changes in saturation and brightness.',
                }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: 'type: boolean' }) }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: 'default: false' }) }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, { id: 'style', children: (0, i.jsx)(n.code, { children: 'style' }) }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, { children: "Panel's container style." }),
                '\n',
                (0, i.jsx)(n.li, { children: (0, i.jsx)(n.code, { children: 'type: ViewStyle' }) }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.admonition, {
              title: 'note',
              type: 'info',
              children: (0, i.jsxs)(n.ul, {
                children: ['\n', (0, i.jsx)(n.li, { children: 'Certain style properties will be overridden.' }), '\n'],
              }),
            }),
          ],
        });
      }
      function x(e = {}) {
        const { wrapper: n } = { ...(0, l.a)(), ...e.components };
        return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
      }
    },
    435: (e, n, t) => {
      t.d(n, { ZP: () => s });
      var i = t(5893),
        l = t(1151);
      function r(e) {
        const n = {
          code: 'code',
          h3: 'h3',
          h4: 'h4',
          li: 'li',
          pre: 'pre',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, l.a)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.h3, { id: 'renderthumb', children: (0, i.jsx)(n.code, { children: 'renderThumb' }) }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    'Function which receives ',
                    (0, i.jsx)(n.code, { children: 'ThumbProps' }),
                    ' and returns a custom thumb component.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, { children: ['Overrides ', (0, i.jsx)(n.code, { children: 'thumbShape' })] }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h4, { id: 'thumbprops', children: (0, i.jsx)(n.code, { children: 'ThumbProps' }) }),
            '\n',
            (0, i.jsxs)(n.table, {
              children: [
                (0, i.jsx)(n.thead, {
                  children: (0, i.jsxs)(n.tr, {
                    children: [
                      (0, i.jsx)(n.th, { style: { textAlign: 'center' }, children: 'Prop' }),
                      (0, i.jsx)(n.th, { style: { textAlign: 'center' }, children: 'Type' }),
                      (0, i.jsx)(n.th, { style: { textAlign: 'left' }, children: 'Description' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(n.tbody, {
                  children: [
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          style: { textAlign: 'center' },
                          children: (0, i.jsx)(n.code, { children: 'positionStyle' }),
                        }),
                        (0, i.jsx)(n.td, {
                          style: { textAlign: 'center' },
                          children: (0, i.jsx)(n.code, { children: 'StyleProp' }),
                        }),
                        (0, i.jsx)(n.td, {
                          style: { textAlign: 'left' },
                          children:
                            'This style determines the position of the thumb and is a crucial element that should be included.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, { style: { textAlign: 'center' }, children: (0, i.jsx)(n.code, { children: 'width' }) }),
                        (0, i.jsx)(n.td, {
                          style: { textAlign: 'center' },
                          children: (0, i.jsx)(n.code, { children: 'number' }),
                        }),
                        (0, i.jsxs)(n.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Extracted from the ',
                            (0, i.jsx)(n.code, { children: 'thumbSize' }),
                            " prop and it's important for thumb position calculation.",
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          style: { textAlign: 'center' },
                          children: (0, i.jsx)(n.code, { children: 'height' }),
                        }),
                        (0, i.jsx)(n.td, {
                          style: { textAlign: 'center' },
                          children: (0, i.jsx)(n.code, { children: 'number' }),
                        }),
                        (0, i.jsxs)(n.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'Extracted from the ',
                            (0, i.jsx)(n.code, { children: 'thumbSize' }),
                            " prop and it's important for thumb position calculation.",
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          style: { textAlign: 'center' },
                          children: (0, i.jsx)(n.code, { children: 'adaptiveColor' }),
                        }),
                        (0, i.jsx)(n.td, {
                          style: { textAlign: 'center' },
                          children: (0, i.jsx)(n.code, { children: 'SharedValue<string>' }),
                        }),
                        (0, i.jsx)(n.td, {
                          style: { textAlign: 'left' },
                          children: 'White or black based on the contrast ratio.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          style: { textAlign: 'center' },
                          children: (0, i.jsx)(n.code, { children: 'currentColor' }),
                        }),
                        (0, i.jsx)(n.td, {
                          style: { textAlign: 'center' },
                          children: (0, i.jsx)(n.code, { children: 'SharedValue<string>' }),
                        }),
                        (0, i.jsx)(n.td, {
                          style: { textAlign: 'left' },
                          children: 'This shared value will update whenever the color changes.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          style: { textAlign: 'center' },
                          children: (0, i.jsx)(n.code, { children: 'initialColor' }),
                        }),
                        (0, i.jsx)(n.td, {
                          style: { textAlign: 'center' },
                          children: (0, i.jsx)(n.code, { children: 'string' }),
                        }),
                        (0, i.jsxs)(n.td, {
                          style: { textAlign: 'left' },
                          children: ['The initial color value as a ', (0, i.jsx)(n.code, { children: 'string' }), '.'],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsxs)(n.ul, { children: ['\n', (0, i.jsx)(n.li, { children: 'Example Usage:' }), '\n'] }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-tsx',
                children:
                  "import Animated, { useAnimatedStyle } from 'react-native-reanimated';\r\nimport type { RenderThumbProps } from 'reanimated-color-picker';\r\n\r\nfunction MyCustomThumb({ width, height, positionStyle, adaptiveColor, currentColor, initialColor }: RenderThumbProps) {\r\n  const animatedStyle = useAnimatedStyle(() => ({\r\n    borderColor: adaptiveColor.value,\r\n    backgroundColor: currentColor.value,\r\n  }));\r\n\r\n  return (\r\n    <Animated.View\r\n      style={[{ width, height, borderWidth: 1, borderRadius: width / 2, overflow: 'hidden' }, animatedStyle, positionStyle]}\r\n    >\r\n      <View style={{ backgroundColor: initialColor, width: '50%', height, alignSelf: 'flex-end' }} />\r\n    </Animated.View>\r\n  );\r\n}\n",
              }),
            }),
          ],
        });
      }
      function s(e = {}) {
        const { wrapper: n } = { ...(0, l.a)(), ...e.components };
        return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(r, { ...e }) }) : r(e);
      }
    },
    2661: (e, n, t) => {
      t.d(n, { Z: () => i });
      const i = t.p + 'assets/images/panel3-brightness-968159b4b60646446d28a458e40cf53b.png';
    },
    1576: (e, n, t) => {
      t.d(n, { Z: () => i });
      const i = t.p + 'assets/images/panel3-saturation-dafb918fc53688c9bceef0165d7e545c.png';
    },
    1151: (e, n, t) => {
      t.d(n, { Z: () => d, a: () => s });
      var i = t(7294);
      const l = {},
        r = i.createContext(l);
      function s(e) {
        const n = i.useContext(r);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e };
          },
          [n, e]
        );
      }
      function d(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(l)
              : e.components || l
            : s(e.components)),
          i.createElement(r.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);